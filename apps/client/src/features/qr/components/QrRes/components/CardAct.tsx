/** @jsxImportSource @emotion/react */
"use client";

import type { FC, ReactNode } from "react";
import { CardActElT } from "../uiFactory/actions";
import { css } from "@emotion/react";
import { IconType } from "react-icons";

type PropsType = {
  el: CardActElT;
  children: (arg: {
    darkClr: string;
    labelBtn: string;
    Svg: IconType;
  }) => ReactNode;
};

const CardAct: FC<PropsType> = ({ el, children }) => {
  return (
    <div className="w-full h-[154px] border-2 border-gray_sec-0 rounded-[12px] flex flex-col gap-[15px] items-center bg-white_sec px-[25px]">
      <div className="w-full flex items-center justify-start pt-[25px] gap-[24px]">
        <div
          className="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center"
          css={css`
            background: ${el.lightClr};
            color: ${el.darkClr};
          `}
        >
          <el.Svg className="w-[16px] h-[24px]" />
        </div>

        <div className="w-full flex flex-col gap-[1px]">
          <span className="txt__h_xxs text-black_sec">{el.labelTxt}</span>
          <span className="txt__b_md text-gray_sec-3">{el.note}</span>
        </div>
      </div>

      <div className="w-full pb-[25px]">
        {children({
          darkClr: el.darkClr,
          labelBtn: el.labelBtn,
          Svg: el.Svg,
        })}
      </div>
    </div>
  );
};

export default CardAct;
