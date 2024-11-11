/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { compressJson, putItem } = require("./db");

const logPath = path.join(__dirname, "method.txt");

let logs = JSON.parse(fs.readFileSync(logPath, "utf-8") || "{}");

function delay(t = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

async function main(page = 1) {
  try {
    const data = await axios.get("https://api-cypress.klaytnscope.com/v2/txs?page=" + page);
    const list = Array.isArray(data.data.result) ? data.data.result : [];

    console.log("start page:", page, list.length);

    if (list.length === 0) {
      throw "错误";
    }

    list.forEach((v) => {
      if (v.methodName) {
        logs[v.inputHeader] = v.methodName;
      }
    });
    fs.writeFileSync(logPath, JSON.stringify(logs), (err) => {
      if (err) {
        process.exit(0);
      }
    });

    await delay(18000);
    await main(page + 1);
  } catch (error) {
    console.log("爬取数据失败中断", page);
    await delay(8000);
    await main(page);
  }
}

function writeToDb() {
  putItem({
    Item: {
      PK: `METHOD_CONFIG`,
      SK: "METHOD_CONFIG",

      RESULT: compressJson(logs),
      CHAIN: "KAIA",
    },
  });
}
// writeToDb();

// main(2279);
