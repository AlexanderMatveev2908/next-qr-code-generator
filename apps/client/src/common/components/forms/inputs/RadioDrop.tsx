/** @jsxImportSource @emotion/react */
"use client";

import { CheckFieldT } from "@/common/types/uiFactory";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import WrapField from "../HOC/WrapField";
import Drop from "../../dropMenu/Drop";

type PropsType<T extends FieldValues, K extends Path<T>> = {
  name: K;
  label: string;
  arg: CheckFieldT<T, K>[];
};

const RadioDrop = <T extends FieldValues, K extends Path<T>>({
  name,
  arg,
  label,
}: PropsType<T, K>) => {
  const { watch } = useFormContext();

  const chosen = watch(name);

  return (
    <WrapField
      {...{
        label,
        msg: "",
      }}
    >
      <Drop
        {...{
          label: chosen ?? "Chose Size",
        }}
      >
        {({ setIsOpen, twd }) =>
          arg.map((el) => (
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              key={el.id}
              className={twd}
            >
              <span className="txt__b_md text-[var(--black__sec)]">
                {el.label}
              </span>
            </li>
          ))
        }
      </Drop>
    </WrapField>
  );
};

export default RadioDrop;
