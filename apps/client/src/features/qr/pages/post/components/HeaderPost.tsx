/** @jsxImportSource @emotion/react */
"use client";

import AppLogo from "@/common/components/elements/AppLogo";
import Txt from "@/common/components/elements/Txt";
import { css } from "@emotion/react";
import type { FC } from "react";

const HeaderPost: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[20px] xl:px-[62px]">
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

      <Txt
        {...{
          txt: "Create Your QR Code",
          txtTwd: "txt__h_lg",
        }}
      />

      <Txt
        {...{
          txt: "Transform any URL into a scannable QR code instantly. Perfect for sharing links, websites, and digital content.",
          txtTwd: "txt__b_md",
          $ctmCss: css`
            color: var(--gray__sec_3);
          `,
        }}
      />
    </div>
  );
};

export default HeaderPost;
