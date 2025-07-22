/** @jsxImportSource @emotion/react */
"use client";

import Txt from "@/common/components/elements/Txt";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="w-full flex justify-center py-[32px]">
      <Txt
        {...{
          txt: "© 2024 QR Generator. Create QR codes instantly and securely.",
          txtTwd: "txt__b_md",
        }}
      />
    </div>
  );
};

export default Footer;
