export * from "./day";

export * from "./fetchProxy";

export function hexToDecimal(value: string = "") {
  const _val = value.trim();

  if (_val.startsWith("0x") || _val.startsWith("0X")) {
    return parseInt(_val, 16);
  }
  const decimalNum = parseFloat(_val);
  if (!isNaN(decimalNum)) {
    return decimalNum;
  }
  return NaN;
}

export function isAddress(value: string = ""): boolean {
  const _val = value.trim();
  return /^0x[a-fA-F0-9]{40}$/.test(_val);
}

export function isHash(value: string = ""): boolean {
  const _val = value.trim();
  return /^0x[a-fA-F0-9]{64}$/.test(_val);
}

export function isNumber(value: string = "") {
  const _val = value.trim();
  const result = hexToDecimal(_val);
  return !isNaN(result);
}

export function getValueType(value: string = ""): "address" | "hash" | "number" | "normal" {
  const _val = value.trim();
  if (isAddress(_val)) {
    return "address";
  } else if (isHash(_val)) {
    return "hash";
  } else if (isNumber(_val)) {
    return "number";
  }
  return "normal";
}
