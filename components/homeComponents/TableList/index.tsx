"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Table, {
  blockColumns_home,
  blockColumns_home_mobile,
  txColumns_home,
  txColumns_home_mobile,
} from "@/components/table";

import type { BlockResponseData, TxResponseData } from "@/lib/dbApi/type";

import "swiper/swiper-bundle.css";
import style from "./index.module.css";

function TableList({ blocks, txs }: { blocks: BlockResponseData[]; txs: TxResponseData[] }) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>();

  useEffect(() => {
    setIsMobile(document.body.clientWidth <= 668);
  }, []);

  if (typeof isMobile === "undefined") return null;
  if (isMobile) {
    return (
      <div className={style.tableList}>
        <Swiper slidesPerView={1} spaceBetween={10}>
          <SwiperSlide className={style.mb_listItem}>
            <div className={style.title}>
              <Link href="/blocks">RECENT BLOCK</Link>
            </div>
            <Table columns={blockColumns_home_mobile} dataSource={blocks}></Table>
          </SwiperSlide>
          <SwiperSlide className={style.mb_listItem}>
            <div className={style.title}>
              <Link href="/blocks">RECENT TRANSACTIONS</Link>
            </div>
            <Table columns={txColumns_home_mobile} dataSource={txs}></Table>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }

  return (
    <div className={style.tableList}>
      <div className={style.listItem}>
        <div className={style.title}>
          <Link href="/blocks">RECENT BLOCK</Link>
        </div>
        <Table columns={blockColumns_home} dataSource={blocks}></Table>
      </div>
      <div className={style.listItem}>
        <div className={style.title}>
          <Link href="/blocks">RECENT TRANSACTIONS</Link>
        </div>
        <Table columns={txColumns_home} dataSource={txs}></Table>
      </div>
    </div>
  );
}

export default TableList;
