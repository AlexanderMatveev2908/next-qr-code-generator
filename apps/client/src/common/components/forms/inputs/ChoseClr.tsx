/** @jsxImportSource @emotion/react */
"use client";

import { CheckT, CheckFieldT } from "@/common/types/uiFactory";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import WrapField from "../HOC/WrapField";
import { css } from "@emotion/react";

type PropsType<T extends FieldValues, K extends Path<T>> = {
  name: K;
  label: string;
  type: CheckT;
  arg: CheckFieldT<T, K>[];
};

const ChoseClr = <T extends FieldValues, K extends Path<T>>({
  arg,
  label,
  name,
  type,
}: PropsType<T, K>) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <WrapField
      {...{
        label,
        msg: errors?.[name]?.message as string,
      }}
    >
      <div className="w-full flex justify-center gap-[12px]">
        {arg.map((el) => (
          <button
            type="button"
            key={el.id}
            css={css`
              transition: 0.3s;
              transform: scale(1);
              width: 50px;
              height: 50px;
              border-radius: 8px;

              background: ${el.val};

              &:hover {
                transform: scale(1.2);
              }

              &:active {
                transition: 0.1s;
                transform: scale(0.8);
              }
            `}
          ></button>
        ))}
      </div>
    </WrapField>
  );
};

export default ChoseClr;
