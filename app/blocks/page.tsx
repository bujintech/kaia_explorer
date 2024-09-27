"use client";

import { useRouter } from "next/navigation";

const Blocks = () => {
  const router = useRouter();

  const onBlockDetail = () => {
    router.push("/block/55");
  };

  return (
    <>
      <div onClick={onBlockDetail}>block 1</div>
      <div>block 2</div>
    </>
  );
};

export default Blocks;
