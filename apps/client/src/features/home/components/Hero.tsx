/** @jsxImportSource @emotion/react */
"use client";

import AppLogo from "@/common/components/elements/AppLogo";
import Txt from "@/common/components/elements/Txt";
import WrapAppBtn from "@/common/components/HOC/WrapAppBtn";
import { css } from "@emotion/react";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="w-full h-[600px] bg-[var(--gray__sec_0)] flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%] xl:w-[calc(100%-600px)] h-[calc(100%-280px)]">
        <div className="w-full flex justify-center">
          <AppLogo
            {...{
              $customCSS: css`
                width: 80px;
                height: 80px;
                background: linear-gradient(
                  90deg,
                  var(--blue__pmr) 0%,
                  var(--purple__pmr) 100%
                );
              `,
            }}
          />
        </div>

        <div className="w-full mt-[12px]">
          <Txt
            {...{
              txt: "Generate QR Codes for Anything",
              txtTwd: "txt__h_xl",
            }}
          />
        </div>

        <div className="w-full mt-[21px]">
          <Txt
            {...{
              txt: "Transform any profile URL into a beautiful, scannable QR code. Perfect for social media, business cards, and networking.",
              $ctmCss: css`
                color: var(--gray__sec_3);
              `,
              txtTwd: "txt__b_lg",
            }}
          />
        </div>

        <div className="w-fit mx-auto mt-[30px]">
          <WrapAppBtn
            {...{
              wrapper: "next_link",
              $ctmCss: css`
                background: var(--blue__pmr);
              `,
              label: "Create QR Code",
              href: "/qr/post",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
