/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config();
const { batchWrite, compressJson } = require("./db");

const BASE_NODE_RPC = process.env.BASE_NODE_RPC;

function getblockItem(data) {
  const tx_total = data.transactions?.length || 0;
  const _data = { ...data, transactions: [], transactionsTotal: tx_total };
  const RESULT = compressJson(_data);

  const _blockNumber = parseInt(data.number, 16).toString();

  return {
    // PK: data.hash,
    // SK: "BLOCK",

    // GS1PK: _blockNumber,
    // GS1SK: `BLOCK#${_blockNumber}`,
    PK: _blockNumber,
    SK: `BLOCK#${_blockNumber}`,

    GS1PK: data.hash,
    GS1SK: "BLOCK",

    GS2PK: data.miner,
    GS2SK: `BLOCK#${_blockNumber}`,

    RESULT: JSON.stringify(RESULT),
    CHAIN: "KAIA",
  };
}

function getTransactionItem(data, timestamp) {
  const _data = { ...data, timestamp, v: "", r: "", s: "" };

  const RESULT = compressJson(_data);
  const _blockNumber = parseInt(data.blockNumber, 16).toString();

  return {
    // PK: data.hash,
    // SK: "TX",

    // GS1PK: _blockNumber,
    // GS1SK: `TX#${parseInt(data.transactionIndex, 16)}`,
    PK: _blockNumber,
    SK: `TX#${_blockNumber}#${parseInt(data.transactionIndex, 16)}`,

    GS1PK: data.hash,
    GS1SK: "TX",

    GS2PK: data.from,
    GS2SK: `TX#${_blockNumber}#${parseInt(data.nonce, 16)}`,

    GS3PK: data.to,
    GS3SK: `TX#${_blockNumber}#${parseInt(data.transactionIndex, 16)}`,

    RESULT: JSON.stringify(RESULT),
    CHAIN: "KAIA",
  };
}

const getBlockByNumber = (blockNumber) => {
  return fetch(BASE_NODE_RPC, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: [blockNumber, true],
      id: 1,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }
    return res.json();
  });
};

async function taskItem(blockNumber) {
  const data = await getBlockByNumber(blockNumber);

  const result = data.result;
  if (result && result.hash) {
    const blockItem = getblockItem(result);
    const txs = [...(result.transactions || [])].map((v) => getTransactionItem(v, result.timestamp));

    const dataList = [blockItem, ...txs].map((Item) => {
      return {
        PutRequest: { Item },
      };
    });
    await batchWrite(dataList);
  }
}

async function main() {
  let currentBlock = 166887901;
  const max = 166887915;
  while (currentBlock <= max) {
    try {
      await taskItem(currentBlock);
    } catch (e) {
      console.log("blockNumber error:", currentBlock);
      // console.log(e);
    }
    currentBlock++;
  }
}

main();
