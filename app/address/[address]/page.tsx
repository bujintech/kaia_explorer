"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import style from "./index.module.css";

const Address = ({ params: { address } }: { params: { address: string } }) => {
  return <>address _ {address}</>;
};

export default Address;
