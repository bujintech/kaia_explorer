/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config();
const { batchWrite, compressJson, putItem } = require("./db");
const fs = require("fs");
const path = require("path");

const BASE_NODE_RPC = process.env.BASE_NODE_RPC;

const logPath = path.join(__dirname, "log.txt");

function writeLogs(blockNumber, errStr) {
  console.log(errStr);
  const logs = fs.readFileSync(logPath, "utf-8");
  fs.writeFileSync(logPath, `${logs},${blockNumber}`, (err) => {
    if (err) {
      process.exit(0);
    }
  });
  process.exit(0);
}

function getblockItem(data) {
  const tx_total = data.transactions?.length || 0;
  const _data = { ...data, transactions: [], transactionsTotal: tx_total };
  const RESULT = compressJson(_data);

  const _blockNumber = parseInt(data.number, 16).toString();

  return {
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

  const txIndex = String(parseInt(data.transactionIndex, 16)).padStart(3, 0);

  return {
    PK: _blockNumber,
    SK: `TX#${_blockNumber}#${txIndex}`,

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
      writeLogs(blockNumber, "fetch is not OK");
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
  } else {
    writeLogs(blockNumber, `current block height [${blockNumber}] not find data`);
  }
}

const maxBlockNumber = async (maxBlockNumber) => {
  await putItem({
    Item: {
      PK: `MAX_BLOCK`,
      SK: `MAX_BLOCK`,
      RESULT: `${maxBlockNumber}`,
      CHAIN: "KAIA",
    },
  });
};

async function main() {
  // let currentBlock = 168177000;
  let currentBlock = 168177567;
  const max = 168177568;
  try {
    while (currentBlock <= max) {
      await taskItem(currentBlock);
      console.log("current block success", currentBlock);
      currentBlock++;
    }
    maxBlockNumber(currentBlock--);
  } catch (e) {
    console.log(e);
    writeLogs(currentBlock, "db error");
  }
}
