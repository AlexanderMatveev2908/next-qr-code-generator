/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";

type PropsType = {
  children: React.ReactNode;
};

const WrapWake: FC<PropsType> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};

export default WrapWake;
