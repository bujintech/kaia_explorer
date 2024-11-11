export * from "./day";

export * from "./fetchProxy";

export function hexToDecimal(value: string | number = "") {
  const _val = String(value).trim();

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

export function formatNumber(num: string | number) {
  let numStr = "";
  if (typeof num === "number") {
    numStr = isNaN(num) ? "" : num.toString();
  } else if (typeof num === "string") {
    const _num = hexToDecimal(num);
    if (!isNaN(_num)) {
      numStr = _num.toString();
    }
  }
  if (!numStr) return "--";

  // eslint-disable-next-line prefer-const
  let [integerPart, decimalPart] = numStr.split(".");
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

export function formatHash(hash: string = "") {
  if (hash.length <= 10) {
    return hash;
  }
  const start = hash.substring(0, 6);
  const end = hash.substring(hash.length - 4);
  return `${start}...${end}`;
}
