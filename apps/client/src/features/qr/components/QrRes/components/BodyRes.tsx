/** @jsxImportSource @emotion/react */
"use client";

import Txt from "@/common/components/elements/Txt";
import { css } from "@emotion/react";
import type { FC } from "react";
import ImgLoader from "@/common/components/HOC/assetsHandlers/ImgLoader";

type PropsType = {
  size: number;
  urlCode: string;
  inputUrl: string;
};

const BodyRes: FC<PropsType> = ({ size, inputUrl, urlCode }) => {
  return (
    <>
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

      <div className="w-full flex flex-col gap-[8px] p-[16px] bg-gray_sec-0 text-gray_sec-3">
        <div className="w-full flex justify-between">
          <Txt
            {...{
              txt: "Content",
              txtTwd: "txt__b_md",
              justify: "start",
            }}
          />
          <Txt
            {...{
              txt: "URL",
              txtTwd: "txt__b_md",
              justify: "end",
            }}
          />
        </div>

        <div className="w-full flex items-center h-[44px] bg-white_sec rounded-[4px] justify-start pl-[9px] border-2 border-gray_sec-0">
          <Txt
            {...{
              txt: inputUrl,
              txtTwd: "txt__b_md text-gray_sec-3",
              justify: "start",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BodyRes;
