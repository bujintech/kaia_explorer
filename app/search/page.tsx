"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import style from "./index.module.css";

const Search = ({ searchParams: { keyword } }: { searchParams: { keyword: string } }) => {
  console.log(keyword);
  return <>search page keyword: {keyword}</>;
};

export default Search;
