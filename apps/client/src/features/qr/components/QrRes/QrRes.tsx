/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import HeaderRes from "./components/HeaderRes";
import ImgLoader from "@/common/components/HOC/assets/ImgLoader";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { css } from "@emotion/react";
import { grabSize } from "./lib";

type PropsType = {
  urlCode: string;
  input: PostQrFormT;
};

const QrRes: FC<PropsType> = ({ urlCode, input }) => {
  const size = grabSize(input.size);

  return (
    <div className="w-[90%] sm:w-[75%] xl:w-full xl:px-[288px] py-[32px] h-full grid grid-cols-1 gap-[20px]">
      <div className="w-full h-fit bg-[var(--white__sec)] rounded-[12px] p-[15px] xl:p-[33px] grid grid-cols-1 gap-[25px]">
        <HeaderRes />

        <div
          className="justify-self-center"
          css={css`
            min-width: ${size}px;
            width: ${size}px;
            max-height: ${size}px;
            height: ${size}px;
          `}
        >
          <ImgLoader
            {...{
              src: urlCode,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default QrRes;
