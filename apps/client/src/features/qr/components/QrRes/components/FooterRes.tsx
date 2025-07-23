/** @jsxImportSource @emotion/react */
"use client";

import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import type { FC } from "react";
import { css } from "@emotion/react";
import { useGenIDs } from "@/core/hooks/etc/useGenIDs";
import { buildInfoResult } from "../uiFactory";
import { __cg } from "@shared/first/lib/logger.js";
import { resp } from "@/core/lib/style";

type PropsType = PostQrFormT;

const FooterRes: FC<PropsType> = ({ color, format, size }) => {
  const arg = buildInfoResult({
    color,
    format,
    size,
  });

  __cg("arg", arg);

  const {
    ids: [ids],
  } = useGenIDs({
    lengths: [arg.length],
  });

  return (
    <div
      className="w-full grid gap-x-[15px] gap-y-[20px] place-content-center"
      css={css`
        grid-template-columns: repeat(auto-fit, minmax(200px, 300px));

        ${resp(1400)} {
          grid-template-columns: repeat(4, 1fr);
        }
      `}
    >
      {arg.map((el, i) => (
        <div
          key={ids[i]}
          className="w-full flex flex-col items-center justify-center gap-[4px] h-[90px] border-2 border-gray_sec-0 rounded-[14px]"
        >
          <div className="w-full flex justify-center items-center gap-1">
            {el.label.toLowerCase() === "color" && (
              <div
                className="w-[20px] h-[20px] rounded-[4px]"
                css={css`
                  background: ${el.val};
                `}
              ></div>
            )}

            <span className="txt__h_sm">{el.val}</span>
          </div>

          <span className="txt__b_md text-gray_sec-3">{el.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterRes;
