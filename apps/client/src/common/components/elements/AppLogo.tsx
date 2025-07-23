/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import { InnerLogoSvg } from "../SVGs";
import { css, SerializedStyles } from "@emotion/react";

type PropsType = {
  $customCSS: SerializedStyles;
};

const AppLogo: FC<PropsType> = ({ $customCSS }) => {
  return (
    <div
      css={css`
        ${$customCSS}
      `}
      className="flex justify-center items-center rounded-[20%]"
    >
      <InnerLogoSvg className="w-[37.5%] h-[45%] text-white_sec" />
    </div>
  );
};

export default AppLogo;
