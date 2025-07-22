/** @jsxImportSource @emotion/react */
"use client";

import { CheckFieldT, CheckT } from "@/common/types/uiFactory";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import WrapField from "../HOC/WrapField";
import Drop from "../../dropMenu/Drop";

type PropsType<T extends FieldValues, K extends Path<T>> = {
  name: K;
  label: string;
  type: CheckT;
  arg: CheckFieldT<T, K>[];
};

const CheckDrop = <T extends FieldValues, K extends Path<T>>({
  arg,
  name,
  type,
  label,
}: PropsType<T, K>) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const chosen = watch(name);

  const handleClick = (v: T[K]) => {
    if (type === "radio") {
      setValue(name, (v === chosen ? "" : v) as T[K], {
        shouldValidate: true,
      });
    }
  };

  return (
    <WrapField
      {...{
        label,
        msg: errors?.[name]?.message as string,
      }}
    >
      <Drop
        {...{
          label: arg.find((el) => el.val === chosen)?.label ?? "Chose Size",
        }}
      >
        {({ setIsOpen, twd }) =>
          arg
            .filter((el) => el.val !== chosen)
            .map((el) => (
              <li
                onClick={() => {
                  handleClick(el.val);
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

export default CheckDrop;
