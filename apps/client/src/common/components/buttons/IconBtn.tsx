/** @jsxImportSource @emotion/react */
"use client";

import { AppEventT } from "@/common/types/api";
import { css } from "@emotion/react";
import type { FC } from "react";
import { $appClr } from "@/core/uiFactory/style";
import { IconType } from "react-icons";

type PropsType = {
  handleClick: () => void;
  Svg: IconType;
  act?: AppEventT;
  isEnabled?: boolean;
};

const IconBtn: FC<PropsType> = ({
  handleClick,
  act = AppEventT.NONE,
  Svg,
  isEnabled = true,
}) => {
  const $clr = $appClr[act];

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!isEnabled}
      className="btn__app"
      css={css`
        color: ${$clr};
      `}
      style={
        {
          "--scale__up": 1.3,
        } as React.CSSProperties
      }
    >
      <Svg className="w-[40px] h-[40px]" />
    </button>
  );
};

export default IconBtn;
