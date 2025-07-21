/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import { css, SerializedStyles } from "@emotion/react";

type PropsType = {
  txt: string;
  txtTwd?: string;
  $ctmCss?: SerializedStyles;
};

const Txt: FC<PropsType> = ({ txt, txtTwd, $ctmCss }) => {
  return (
    <div
      className="w-full flex justify-center"
      css={css`
        ${$ctmCss ??
        css`
          color: var(--black__sec);
        `}
      `}
    >
      <span className={`${txtTwd ?? "txt__h_md"} `}>{txt}</span>
    </div>
  );
};

export default Txt;
