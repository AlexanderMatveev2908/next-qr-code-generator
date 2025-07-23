/** @jsxImportSource @emotion/react */
"use client";

import { DownloadSvg } from "@/common/components/SVGs";
import type { FC } from "react";
import ContentActBtn from "./ContentActBtn";

type PropsType = {
  href: string;
  fileName: string;
};

const DownloadAnc: FC<PropsType> = ({ href, fileName }) => {
  return (
    <a href={href} download={fileName}>
      <ContentActBtn
        {...{
          $bg: "var(--green__sec_1)",
          label: "Download",
          Svg: DownloadSvg,
        }}
      />
    </a>
  );
};

export default DownloadAnc;
