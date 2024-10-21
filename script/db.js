/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config();

const { gzipSync } = require("zlib");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  BatchWriteCommand,
  QueryCommand,
  GetCommand,
  PutCommand,
} = require("@aws-sdk/lib-dynamodb");

const DB_REGION = process.env.DB_REGION;
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
const SSECRET_ACCESS_KEY = process.env.SSECRET_ACCESS_KEY;
const TABLE_NAME = process.env.TABLE_NAME;

const client = new DynamoDBClient({
  region: DB_REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SSECRET_ACCESS_KEY,
  },
});

docClient = DynamoDBDocumentClient.from(client);

function splitArray(arr) {
  if (arr.length <= 20) {
    return [arr, null];
  }

  const firstPart = arr.slice(0, 20);
  const secondPart = arr.slice(20);

  return [firstPart, secondPart];
}

const batchWrite = async (dataList) => {
  const [firstPart, secondPart] = splitArray(dataList);
  const command = new BatchWriteCommand({
    RequestItems: {
      [TABLE_NAME]: firstPart,
    },
  });

  await docClient.send(command);
  if (secondPart) {
    await batchWrite(secondPart);
  }
};

const getItem = async (params) => {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    ...params,
  });
  return await docClient.send(command);
};

const putItem = async (params) => {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    ...params,
  });
  return await docClient.send(command);
};

const query = async (params) => {
  const command = new QueryCommand({
    TableName: TABLE_NAME,
    ...params,
  });
  return await docClient.send(command);
};

const compressJson = (jsonObj) => {
  const jsonString = JSON.stringify(jsonObj);
  return gzipSync(jsonString).toString("base64");
};

module.exports = {
  docClient,
  compressJson,
  batchWrite,
  getItem,
  putItem,
  query,
};
