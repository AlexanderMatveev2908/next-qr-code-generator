/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import { css, SerializedStyles } from "@emotion/react";

type PropsType = {
  txt: string;
  txtTwd?: string;
  $ctmCss?: SerializedStyles;
  justify?: string;
};

const Txt: FC<PropsType> = ({ txt, txtTwd, $ctmCss, justify }) => {
  return (
    <div
      className="w-full flex"
      css={css`
        justify-content: ${justify ?? "center"};
        ${$ctmCss ??
        css`
          color: var(--black__sec);
        `}
      `}
    >
      <span className={`${txtTwd ?? "txt__h_md"} text-center`}>{txt}</span>
    </div>
  );
};

export default Txt;
