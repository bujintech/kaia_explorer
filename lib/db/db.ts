import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  BatchWriteCommand,
  GetCommand,
  BatchGetCommand,
  QueryCommand,
} from "@aws-sdk/lib-dynamodb";

import type {
  PutCommandInput,
  PutCommandOutput,
  BatchWriteCommandOutput,
  GetCommandInput,
  GetCommandOutput,
  BatchGetCommandOutput,
  QueryCommandInput,
  QueryCommandOutput,
} from "@aws-sdk/lib-dynamodb";

const DB_REGION = process.env.DB_REGION as string;
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID as string;
const SSECRET_ACCESS_KEY = process.env.SSECRET_ACCESS_KEY as string;
const TABLE_NAME = process.env.TABLE_NAME as string;

class DB {
  private docClient: DynamoDBDocumentClient;
  public tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
    const client = new DynamoDBClient({
      region: DB_REGION,
      credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SSECRET_ACCESS_KEY,
      },
    });

    this.docClient = DynamoDBDocumentClient.from(client);
  }

  public async putItem(params: Omit<PutCommandInput, "TableName">): Promise<PutCommandOutput> {
    const command = new PutCommand({
      TableName: this.tableName,
      ...params,
    });
    return await this.docClient.send(command);
  }

  public async batchWrite(
    params: {
      PutRequest?: { Item: Record<string, string> };
      DeleteRequest?: { Key: Record<string, string> };
    }[]
  ): Promise<BatchWriteCommandOutput> {
    const command = new BatchWriteCommand({
      RequestItems: {
        [this.tableName]: params,
      },
    });
    return await this.docClient.send(command);
  }

  public async batchGetItem(params: Record<string, string>[]): Promise<BatchGetCommandOutput> {
    const command = new BatchGetCommand({
      RequestItems: {
        [this.tableName]: {
          Keys: params,
        },
      },
    });
    return await this.docClient.send(command);
  }

  public async getItem(params: Omit<GetCommandInput, "TableName">): Promise<GetCommandOutput> {
    const command = new GetCommand({
      TableName: this.tableName,
      ...params,
    });
    return await this.docClient.send(command);
  }

  public async query(params: Omit<QueryCommandInput, "TableName">): Promise<QueryCommandOutput> {
    const command = new QueryCommand({
      TableName: this.tableName,
      ...params,
    });
    return await this.docClient.send(command);
  }
}

const db = new DB(TABLE_NAME);

export default db;
