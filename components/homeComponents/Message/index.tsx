"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Chart from "./Chart";
import BlockHeight from "./BlockHeight";
import Network from "./Network";
import Kaia from "./Kaia";
import style from "./index.module.css";
import "swiper/swiper-bundle.css";

function Message({ blockHeight }: { blockHeight: number }) {
  const isMobile = document.body.clientWidth <= 668;

  if (isMobile) {
    return (
      <div className={style.message}>
        <Swiper>
          <SwiperSlide>
            <Chart></Chart>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Network></Network>
          </SwiperSlide>
          <SwiperSlide>
            <Kaia></Kaia>
          </SwiperSlide> */}
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
