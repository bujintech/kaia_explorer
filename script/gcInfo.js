/* eslint-disable @typescript-eslint/no-require-imports */

const { compressJson, batchWrite, putItem } = require("./db");
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

const startTask = async (data) => {
  const RESULT = compressJson(data);

  const name = data.name?.toLocaleLowerCase();
  if (!name) return;

  const Item = {
    PK: `GC`,
    SK: name,

    RESULT: JSON.stringify(RESULT),
    CHAIN: "KAIA",
  };
  await putItem({ Item });
};

const startGcConfig = async (list) => {
  const map = {};
  list.forEach(({ contracts = [], name }) => {
    if (Array.isArray(contracts)) {
      contracts.forEach(({ address }) => {
        map[address] = (name || "").toLocaleLowerCase();
      });
    }
  });

  await putItem({
    Item: {
      PK: `GC_CONFIG`,
      SK: "GC_CONFIG",

      RESULT: JSON.stringify(map),
      CHAIN: "KAIA",
    },
  });
};

const main = async () => {
  const { data } = await axios.get(url);
  const str = extractScriptTag(data);
  if (!str) return;

  try {
    const data1 = JSON.parse(str.slice(19, -1))[1];
    const { governanceCouncils } = JSON.parse(data1.slice(3, -1))[3];
    if (!Array.isArray(governanceCouncils)) {
      console.log("governanceCouncils is not array");
      return;
    }

    let item = governanceCouncils.pop();
    while (item) {
      await startTask(item);
      item = governanceCouncils.pop();
    }

    await startGcConfig(governanceCouncils);

    console.log("GC Info data synchronization completed ～～～～～");
  } catch (e) {
    console.log(e);
  }
};

main();
