import { useCallback, useEffect, useState } from "react";

const PAGE_NUMBER = 25; //maintain consistency with the server

export interface UseTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apiFunction: (pageSize: number) => Promise<any>;
}

function useTable({ apiFunction }: UseTableProps) {
  const [loading, setLoading] = useState(true);

  const [pageSize, setPageSize] = useState<number>(1);

  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);

    apiFunction(pageSize)
      .then(({ data }) => {
        const list = Array.isArray(data.result) ? data.result : [];
        setData(list);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageSize]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading: loading,
    dataSource: data,
    pageSize: pageSize,
    pageNumber: PAGE_NUMBER,
    total: 6000,
    setPageSize: setPageSize,
  };
}

export default useTable;
