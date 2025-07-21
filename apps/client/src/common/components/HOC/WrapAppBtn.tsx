/** @jsxImportSource @emotion/react */
"use client";

import { css, SerializedStyles } from "@emotion/react";
import { __cg } from "@shared/first/lib/logger.js";
import Link from "next/link";
import { CSSProperties, useMemo, type FC } from "react";
import { IconType } from "react-icons";

type PropsType = {
  wrapper: "html_button" | "next_link";
  $ctmCss: SerializedStyles;
  label: string;

  href?: string;
  handleClick?: () => void;
  Svg?: IconType;
  isEnabled?: boolean;
};

const WrapAppBtn: FC<PropsType> = ({
  $ctmCss,
  label,
  wrapper,
  href,
  isEnabled = true,
  handleClick,
}) => {
  const objProps = useMemo(
    () => ({
      className: `${
        wrapper === "next_link" ? "el__app" : "btn__app"
      } w-full py-[15px] px-[30px] rounded-[8px] flex justify-center items-center`,
      css: css`
        ${$ctmCss};
      `,
      style: {
        "--scale__up": 1.15,
      } as CSSProperties,
    }),
    [wrapper, $ctmCss]
  );

  __cg("obj", objProps);

  const content = (
    <>
      <span className="txt__h_xs text-[whitesmoke]">{label}</span>
    </>
  );

  return wrapper === "next_link" ? (
    <Link href={href!} {...objProps}>
      {content}
    </Link>
  ) : (
    <button onClick={handleClick} disabled={!isEnabled} {...objProps}>
      {content}
    </button>
  );
};

export default WrapAppBtn;
