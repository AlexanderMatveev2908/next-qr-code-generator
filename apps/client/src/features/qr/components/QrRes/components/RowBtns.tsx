/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
"use client";

import { DownloadSvg, LinkSvg } from "@/common/components/SVGs";
import { envApp } from "@/core/constants/env";
import { useCpyClip } from "@/core/hooks/etc/useCpyClip";
import { genUrlParams } from "@/core/lib/process";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import type { FC } from "react";
import ContentActBtn from "./ContentActBtn";
import { __cg } from "@shared/first/lib/logger.js";
import CpyClip from "@/common/components/elements/CpyClip";

type PropsType = {
  i: number;
  urlCode: string;
  fileName: string;
  input: PostQrFormT;
  darkClr: string;
  labelBtn: string;
};

const RowBtns: FC<PropsType> = ({
  i,
  fileName,
  input,
  urlCode,
  darkClr,
  labelBtn,
}) => {
  const { isCopied, setIsCopied } = useCpyClip();

  const handleNavigator = async () => {
    const BASE_URL = envApp.CURR_URL;

    const parsed = BASE_URL + `/qr/get?${genUrlParams(input)}`;

    try {
      await navigator.clipboard.writeText(parsed);

      setIsCopied(true);
    } catch (err: any) {
      __cg("err", err?.message);
    }
  };

  return !i ? (
    <a href={urlCode} download={fileName}>
      <ContentActBtn
        {...{
          $bg: darkClr,
          label: labelBtn,
          Svg: DownloadSvg,
        }}
      />
    </a>
  ) : (
    <button onClick={handleNavigator} type="button" className="w-full relative">
      <ContentActBtn
        {...{
          $bg: darkClr,
          label: labelBtn,
          Svg: LinkSvg,
        }}
      />

      <CpyClip
        {...{
          isCopied,
        }}
      />
    </button>
  );
};

export default RowBtns;
