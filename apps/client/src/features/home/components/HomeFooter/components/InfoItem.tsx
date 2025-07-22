/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import { InfoItemT } from "../uiFactory";
import { css } from "@emotion/react";
import Txt from "@/common/components/elements/Txt";

type PropsType = {
  info: InfoItemT;
};

const InfoItem: FC<PropsType> = ({ info }) => {
  return (
    <div className="w-full flex flex-col items-center px-[10px] py-[24px] gap-[13px]">
      <div
        className="w-[64px] h-[64px] rounded-full flex items-center justify-center"
        css={css`
          background: linear-gradient(
            90deg,
            ${info.argGradient[0]} 0%,
            ${info.argGradient[1]} 100%
          );
        `}
      >
        <info.Svg className="text-[var(--white__sec)] w-[17.5px] h-[20px]" />
      </div>

      <Txt
        {...{
          txt: info.title,
          txtTwd: "txt__h_xs",
        }}
      />

      <Txt
        {...{
          txt: info.desc,
          txtTwd: "txt__b_md",
          $ctmCss: css`
            color: var(--gray__sec_3);
          `,
        }}
      />
    </div>
  );
};

export default InfoItem;
