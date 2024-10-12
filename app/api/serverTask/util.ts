import { gzipSync } from "zlib";

function formatJsonToGzip(data: object) {
  return gzipSync(JSON.stringify(data));
}

const SPILT_NUMBER = 3;
function splitStringAtThirdFromEnd(str: string): [string, string] {
  const splitIndex = str.length - SPILT_NUMBER;
  if (splitIndex < 0) {
    return ["0", str.padStart(SPILT_NUMBER, "0")];
  }
  const part1 = str.slice(0, splitIndex);
  const part2 = str.slice(splitIndex);
  return [part1.padStart(1, "0"), part2];
}

export { formatJsonToGzip, splitStringAtThirdFromEnd };
