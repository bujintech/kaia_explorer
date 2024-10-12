import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: "AKIATE3RYCMY7PE6NZZZ",
    secretAccessKey: "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",
  },
});
const docClient = DynamoDBDocumentClient.from(client);

export default docClient;
