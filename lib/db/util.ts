import { gzipSync, gunzipSync } from "zlib";

function compressJson(jsonObj: Record<string, unknown>): string {
  const jsonString = JSON.stringify(jsonObj);
  return gzipSync(jsonString).toString("base64");
}

function decompressJson(compressedData: string): Record<string, unknown> {
  const buffer = Buffer.from(compressedData, "base64");
  const uncompressedData = gunzipSync(buffer);
  return JSON.parse(uncompressedData.toString());
}

function splitGroupToNumber(val: string | number): string {
  const _val = Number(val);
  return Math.floor(_val / 10).toString();
}

export { compressJson, decompressJson, splitGroupToNumber };
