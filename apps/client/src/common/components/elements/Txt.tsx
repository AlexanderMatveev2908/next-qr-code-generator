/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import { css } from "@emotion/react";

type PropsType = {
  txt: string;
  txtTwd?: string;
  justify?: string;
};

const Txt: FC<PropsType> = ({ txt, txtTwd, justify }) => {
  return (
    <div
      className="w-full flex"
      css={css`
        justify-content: ${justify ?? "center"};
      `}
    >
      <span className={`${txtTwd ?? "txt__h_md"} text-center`}>{txt}</span>
    </div>
  );
};

export default Txt;
