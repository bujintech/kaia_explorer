"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./index.module.css";

import { getValueType, hexToDecimal } from "@/lib/utils";

function SearchInput() {
  const [value, setValue] = useState<string>("");

  const router = useRouter();

  const onSearch = useCallback(() => {
    if (!value) return;

    const type = getValueType(value);

    if (type === "number") {
      router.push(`/block/${hexToDecimal(value)}`);
    } else if (type === "address") {
      router.push(`/address/${value}`);
    } else if (type === "hash") {
      router.push(`/hash/${value}`);
    } else {
      router.push(`/search?keyword=${encodeURIComponent(value)}`);
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
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={"Search by Address / Txn Hash / Block /Block Hash / Domain Name"}
      />
      <span className={style.btn} onClick={onSearch}>
        <span></span>
      </span>
    </>
  );
}

function SearchInputWrap() {
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const node = document?.getElementById("homePageSearchSolt");
      setPortalNode(node);
    } else {
      setPortalNode(null);
    }
  }, [pathname]);

  if (pathname === "/") {
    return portalNode
      ? ReactDOM.createPortal(
          <div className={style.searchComponent_home}>
            <SearchInput></SearchInput>
          </div>,
          portalNode
        )
      : null;
  }

  return (
    <div className={style.searchComponent_common}>
      <SearchInput></SearchInput>
    </div>
  );
}

export default SearchInputWrap;
