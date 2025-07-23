/** @jsxImportSource @emotion/react */
"use client";

import type { CSSProperties, FC } from "react";
import { IconType } from "react-icons";
import { css } from "@emotion/react";

type PropsType = {
  Svg: IconType;
  label: string;
  $bg: string;
};

const ContentActBtn: FC<PropsType> = ({ Svg, label, $bg }) => {
  return (
    <div
      className="w-full flex justify-center items-center gap-1 rounded-[8px] text-white_sec h-[44px] el__app"
      css={css`
        background: ${$bg};
      `}
      style={
        {
          "--scale__up": 1.1,
        } as CSSProperties
      }
    >
      <Svg className="w-[16px] h-[16px]" />

      <span className="txt__h_xxs">{label}</span>
    </div>
  );
};

export default ContentActBtn;
