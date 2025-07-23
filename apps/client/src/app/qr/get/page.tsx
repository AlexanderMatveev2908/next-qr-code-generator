"use client";

import WrapCSR from "@/common/components/HOC/pageWrappers/WrapCSR";
import type { FC } from "react";

const page: FC = () => {
  return (
    <WrapCSR {...{ isLoading: true }}>
      <div className=""></div>
    </WrapCSR>
  );
};

export default page;
