/** @jsxImportSource @emotion/react */
"use client";

import Txt from "@/common/components/elements/Txt";
import { useGenIDs } from "@/core/hooks/etc/useGenIDs";
import type { FC } from "react";
import { infoArg } from "./uiFactory";
import InfoItem from "./components/InfoItem";
import { css } from "@emotion/react";
import { resp } from "@/core/lib/style";

const HomeFooter: FC = () => {
  const {
    ids: [ids],
  } = useGenIDs({
    lengths: [infoArg.length],
  });

  return (
    <section className="w-full min-h-[492px] flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%] xl:w-[calc(100%-288px)] h-full py-[64px] flex flex-col items-center gap-[55px]">
        <Txt
          {...{
            txt: "Why Choose QR Generator?",
            txtTwd: "txt__h_md",
          }}
        />

        <div
          className="grid w-full place-content-center gap-x-[40px] gap-y-[20px]"
          css={css`
            grid-template-columns: repeat(auto-fit, 308px);
            ${resp("xl")} {
              grid-template-columns: repeat(3, 308px);
            }
          `}
        >
          {infoArg.map((el, i) => (
            <InfoItem key={ids[i]} {...{ info: el }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;
