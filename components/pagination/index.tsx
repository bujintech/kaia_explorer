"use client";

import style from "./index.module.css";

interface Props {
  pageSize: number;
  total: number;
  pageNumber: number;
  setPageSize: (pageSize: number) => void;
}

function Pagination({ pageSize, total, pageNumber, setPageSize }: Props) {
  const page = Math.ceil(total / pageNumber);

  const handlePageSize = (action: number) => {
    const _pageSize = pageSize + action;
    if (_pageSize < 1 || _pageSize > page) return;

    setPageSize(_pageSize);
  };

  return (
    <div className={style.pagination}>
      <span onClick={() => handlePageSize(-1)}>上一页</span>
      {pageSize}__{page}
      <span onClick={() => handlePageSize(1)}>下一页</span>
    </div>
  );
}

export default Pagination;
