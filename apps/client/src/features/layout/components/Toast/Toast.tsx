/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import { useSelector } from "react-redux";
import { getToastState } from "./slices";
import { __cg } from "@shared/first/lib/logger.js";

const Toast: FC = () => {
  const toastState = useSelector(getToastState);

  __cg("toast", toastState);

  return <div></div>;
};

export default Toast;
