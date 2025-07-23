/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import HeaderRes from "./components/HeaderRes";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { grabSize } from "./lib";
import BodyRes from "./components/BodyRes";
import FooterRes from "./components/FooterRes";

type PropsType = {
  urlCode: string;
  input: PostQrFormT;
};

const QrRes: FC<PropsType> = ({ urlCode, input }) => {
  const size = grabSize(input.size);

  return (
    <div className="w-[90%] sm:w-[75%] xl:w-full xl:px-[288px] py-[32px] h-full grid grid-cols-1 gap-[20px]">
      <div className="w-full h-fit bg-white_sec rounded-[12px] p-[15px] xl:p-[33px] grid grid-cols-1 gap-[25px]">
        <HeaderRes />

        <BodyRes
          {...{
            size,
            urlCode,
            inputUrl: input.url,
          }}
        />

        <FooterRes {...input} />
      </div>
    </div>
  );
};

export default QrRes;
