export * from "./day";

export * from "./fetchProxy";

export function hexToDecimal(value: string = "") {
  const trimmedValue = value.trim();

  if (trimmedValue.startsWith("0x") || trimmedValue.startsWith("0X")) {
    return parseInt(trimmedValue, 16);
  }
  const decimalNum = parseFloat(trimmedValue);
  if (!isNaN(decimalNum)) {
    return decimalNum;
  }
  return NaN;
}

export function isAddress(value: string = ""): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(value);
}

export function isHash(value: string = ""): boolean {
  return /^0x[a-fA-F0-9]{64}$/.test(value);
}

export function isNumber(value: string = "") {
  const result = hexToDecimal(value);
  return !isNaN(result);
}

export function getValueType(value: string = ""): "address" | "hash" | "number" | "normal" {
  if (isAddress(value)) {
    return "address";
  } else if (isHash(value)) {
    return "hash";
  } else if (isNumber(value)) {
    return "number";
  }
  return "normal";
}
