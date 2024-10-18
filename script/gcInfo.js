/* eslint-disable @typescript-eslint/no-require-imports */

const { compressJson, batchWrite } = require("./db");
const axios = require("axios");
const cheerio = require("cheerio");

function extractScriptTag(htmlString) {
  const $ = cheerio.load(htmlString);
  const scripts = $("script");

  for (let i = 0; i < scripts.length; i++) {
    const scriptContent = $(scripts[i]).html(); // 获取脚本内容
    if (scriptContent && scriptContent.includes("governanceCouncils")) {
      return scriptContent;
    }
  }
  return null;
}

const url = "https://kaiascan.io/gc-info";

const getItemData = ({ address, type, version }, data) => {
  delete data.contracts;
  delete data.squareId;
  delete data.squareLink;
  const RESULT = data || compressJson(data);
  return {
    PK: "GC",
    SK: `GC#${address}`,

    GS2PK: address,
    GS2SK: `GC#${type}#${version}`,

    RESULT: JSON.stringify(RESULT),
    CHAIN: "KAIA",
  };
};

const startTask = async (data) => {
  const contracts = Array.isArray(data.contracts) ? data.contracts : [];
  const listData = contracts.map((contract) => {
    const Item = getItemData(contract, data);
    return {
      PutRequest: { Item },
    };
  });
  await batchWrite(listData);
};

const main = async () => {
  const { data } = await axios.get(url);
  const str = extractScriptTag(data);
  if (!str) return;

  try {
    const data1 = JSON.parse(str.slice(19, -1))[1];
    const { governanceCouncils } = JSON.parse(data1.slice(3, -1))[3];

    let item = governanceCouncils.pop();
    while (item) {
      await startTask(item);
      item = governanceCouncils.pop();
    }
    console.log("GC Info data synchronization completed ～～～～～");
  } catch (e) {
    console.log(e);
  }
};

main();
