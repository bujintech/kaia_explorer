"use client";

import { dayjs } from "@/lib/utils";
import { useEffect } from "react";
import Nav from "@/components/nav";
import SearchInput from "@/components/searchInput";

export default function Home() {
  useEffect(() => {
    const timestamp = 1728615530960;

    const timeAgo = dayjs(timestamp).fromNow();

    console.log(timeAgo); // 输出类似于：'10 days ago'
  }, []);

  return (
    <>
      <Nav></Nav>
      <SearchInput></SearchInput>
    </>
  );
}
