/** @jsxImportSource @emotion/react */
"use client";

import AppLogo from "@/common/components/elements/AppLogo";
import { css } from "@emotion/react";
import Link from "next/link";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-[90%] sm:w-[75%] lg:w-[calc(100%-288px)] mx-auto py-[16px]">
      <Link
        href={"/"}
        className="w-full flex items-center justify-start gap-[12px]"
      >
        <AppLogo
          {...{
            $customCSS: css`
              width: 40px;
              height: 40px;
              background: var(--blue__pmr);
            `,
          }}
        />

        <span className="txt__h_xs text-[var(--back__sec)]">QR GENERATOR</span>
      </Link>
    </header>
  );
};

export default Header;
