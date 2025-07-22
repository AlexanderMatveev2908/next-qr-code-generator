/** @jsxImportSource @emotion/react */
"use client";

import { css, SerializedStyles } from "@emotion/react";
import Link from "next/link";
import { CSSProperties, useMemo, type FC } from "react";
import { IconType } from "react-icons";
import WrapApiBtn from "./WrapApiBtn";

type PropsType = {
  wrapper: "html_button" | "next_link";
  $ctmCss: SerializedStyles;
  label: string;

  type?: "button" | "submit";
  href?: string;
  handleClick?: () => void;
  Svg?: IconType;
  isEnabled?: boolean;
  scaleUp?: number;
  isLoading?: boolean;
};

const WrapAppBtn: FC<PropsType> = ({
  $ctmCss,
  label,
  wrapper,
  href,
  type = "button",
  isEnabled = true,
  handleClick,
  scaleUp = 1.2,
  Svg,
  isLoading,
}) => {
  const objProps = useMemo(
    () => ({
      className: `${
        wrapper === "next_link" ? "el__app" : "btn__app"
      } w-full py-[15px] px-[30px] rounded-[8px] flex gap-[12px] justify-center items-center text-[whitesmoke]`,
      css: css`
        ${$ctmCss};
      `,
      style: {
        "--scale__up": scaleUp,
      } as CSSProperties,
    }),
    [wrapper, $ctmCss, scaleUp]
  );

  const content = (
    <>
      {Svg && <Svg className="w-[20px] h-[20px] min-w-[20px] min-h-[20px]" />}

      <span className="txt__h_xs">{label}</span>
    </>
  );

  return wrapper === "next_link" ? (
    <Link href={href!} {...objProps}>
      {content}
    </Link>
  ) : (
    <WrapApiBtn
      {...{
        isLoading,
        act: "INFO",
      }}
    >
      <button
        onClick={handleClick}
        type={type}
        disabled={!isEnabled}
        {...objProps}
      >
        {content}
      </button>
    </WrapApiBtn>
  );
};

export default WrapAppBtn;
