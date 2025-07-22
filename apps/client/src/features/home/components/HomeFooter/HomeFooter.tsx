/** @jsxImportSource @emotion/react */
"use client";

import Txt from "@/common/components/elements/Txt";
import { useGenIDs } from "@/core/hooks/etc/useGenIDs";
import type { FC } from "react";
import { infoArg } from "./uiFactory";
import InfoItem from "./components/InfoItem";

const HomeFooter: FC = () => {
  const {
    ids: [ids],
  } = useGenIDs({
    lengths: [infoArg.length],
  });

  return (
    <section className="w-full h-[492px] flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%] xl:w-[calc(100%-288px)] h-[calc(100%-128px)] flex flex-col items-center gap-[55px]">
        <Txt
          {...{
            txt: "Why Choose QR Generator?",
            txtTwd: "txt__h_md",
          }}
        />

        <div className="w-full grid grid-cols-3">
          {infoArg.map((el, i) => (
            <InfoItem key={ids[i]} {...{ info: el }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;
