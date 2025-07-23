/** @jsxImportSource @emotion/react */
"use client";

import Txt from "@/common/components/elements/Txt";
import type { FC } from "react";

const HeaderRes: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[5px] ">
      <Txt
        {...{
          txt: "Your QR Code",
          txtTwd: "txt__h_md",
        }}
      />

      <Txt
        {...{
          txt: "Scan or download your generated QR code",
          txtTwd: "txt__b_md",
        }}
      />
    </div>
  );
};

export default HeaderRes;
