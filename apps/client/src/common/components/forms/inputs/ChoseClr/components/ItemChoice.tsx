/** @jsxImportSource @emotion/react */
"use client";

import { CheckFieldT } from "@/common/types/uiFactory";
import { css } from "@emotion/react";
import { FieldValues, Path } from "react-hook-form";

type PropsType<T extends FieldValues, K extends Path<T>> = {
  el: CheckFieldT<T, K>;
  isChosen: boolean;
  handleClick: (v: T[K]) => void;
};

const ItemChoice = <T extends FieldValues, K extends Path<T>>({
  el,
  handleClick,
  isChosen,
}: PropsType<T, K>) => {
  return (
    <div
      onClick={handleClick.bind(null, el.val)}
      className="w-[40px] h-[40px] rounded-[8px] cursor-pointer"
      css={css`
        transition: 0.3s;
        transform: scale(${isChosen ? 0.8 : 1});

        background: ${el.val};

        border: 3px solid ${isChosen ? "var(--purple__pmr)" : "transparent"};
        &:hover {
          transform: scale(${isChosen ? 0.8 : 1.2});
        }

        &:active {
          transition: 0.1s;
          transform: scale(0.8);
        }
      `}
    ></div>
  );
};

export default ItemChoice;
