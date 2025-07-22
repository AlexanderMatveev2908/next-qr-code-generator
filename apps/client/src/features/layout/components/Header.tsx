/** @jsxImportSource @emotion/react */
"use client";

import AppLogo from "@/common/components/elements/AppLogo";
import { ArrowSvg } from "@/common/components/SVGs";
import { css } from "@emotion/react";
import { __cg } from "@shared/first/lib/logger.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const Header: FC = () => {
  const path = usePathname();

  __cg("p", path);

  return (
    <header className="w-[90%] sm:w-[75%] lg:w-[calc(100%-288px)] mx-auto py-[16px] flex justify-between">
      <Link href={"/"} className="flex items-center gap-[12px]">
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

      {path.startsWith("/qr") && (
        <Link
          href={path.includes("post") ? "/" : "/qr/post"}
          className="flex items-center gap-[8px] text-[var(--gra__sec_3)]"
        >
          <ArrowSvg className="w-[14px] h-[16px]" />

          <span className="txt__b_md">Back</span>
        </Link>
      )}
    </header>
  );
};

export default Header;
