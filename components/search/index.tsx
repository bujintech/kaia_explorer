"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import style from "./index.module.css";

import { getValueType, hexToDecimal } from "@/lib/utils";

function SearchInput() {
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
      router.push(`search?keyword=${encodeURIComponent(value)}`);
    }
  }, [value]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = (e.target.value || "").trim();
    setValue(val);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        onSearch();
      }
    },
    [onSearch]
  );

  return (
    <div className={style.searchIComponent}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={"Search by Address / Txn Hash / Block /Block Hash / Domain Name"}
      />
      <span className={style.btn} onClick={onSearch}></span>
    </div>
  );
}

export default SearchInput;
