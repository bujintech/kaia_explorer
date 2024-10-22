"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import style from "./index.module.css";

import { getValueType, hexToDecimal } from "@/lib/utils";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const onSearch = useCallback(() => {
    if (!value) {
      alert("no value");
      return;
    }

    const type = getValueType(value);

    if (type === "number") {
      router.push(`block/${hexToDecimal(value)}`);
    } else if (type === "address") {
      router.push(`address/${value}`);
    } else if (type === "hash") {
      router.push(`hash/${value}`);
    } else {
      router.push(`search?keyword=${value}`);
    }
  }, [value]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" || e.keyCode === 13) {
        onSearch();
      }
    },
    [onSearch]
  );

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={"blockNumber、block hash、tx hash、address"}
        className={style.input}
      />
      <span onClick={onSearch}>确定</span>
    </>
  );
};

export default SearchInput;
