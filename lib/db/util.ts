import { gzipSync, gunzipSync } from "zlib";

function compressJson(jsonObj: Record<string, unknown>): string {
  const jsonString = JSON.stringify(jsonObj);
  return gzipSync(jsonString).toString("base64");
}

function decompressJson<T>(compressedData: string): T {
  const buffer = Buffer.from(compressedData, "base64");
  const uncompressedData = gunzipSync(buffer);
  return JSON.parse(uncompressedData.toString());
}

export { compressJson, decompressJson };
