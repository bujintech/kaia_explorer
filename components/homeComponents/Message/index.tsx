"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Chart from "./Chart";
import BlockHeight from "./BlockHeight";
import Network from "./Network";
import Kaia from "./Kaia";
import style from "./index.module.css";
import "swiper/swiper-bundle.css";
import { useGlobalData } from "@/components/layout/context";

function Message({ blockHeight }: { blockHeight: number }) {
  const { isMobile } = useGlobalData();

  if (isMobile) {
    return (
      <div className={style.message}>
        <Swiper slidesPerView={1} spaceBetween={10}>
          <SwiperSlide>
            <Network></Network>
          </SwiperSlide>
          <SwiperSlide>
            <Kaia></Kaia>
          </SwiperSlide>
          <SwiperSlide>
            <Chart></Chart>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }

  return (
    <div className={`${style.message} flex fl_jb`}>
      <div className="flex">
        <Chart></Chart>
        <div className="flex fl_jb" style={{ flexDirection: "column" }}>
          <BlockHeight blockHeight={blockHeight}></BlockHeight>
          <Network></Network>
        </div>
      </div>
      <Kaia></Kaia>
    </div>
  );
}

export default Message;
