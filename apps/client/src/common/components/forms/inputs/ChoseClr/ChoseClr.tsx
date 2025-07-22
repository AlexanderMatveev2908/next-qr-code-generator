/** @jsxImportSource @emotion/react */
"use client";

import { CheckT, CheckFieldT } from "@/common/types/uiFactory";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import WrapField from "../../HOC/WrapField";
import ItemChoice from "./components/ItemChoice";

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
}: PropsType<T, K>) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<T>();

  const chosen = watch(name);

  const handleClick = (v: T[K]) =>
    setValue(name, (chosen === v ? "" : v) as T[K], { shouldValidate: true });

  return (
    <WrapField
      {...{
        label,
        msg: errors?.[name]?.message as string,
      }}
    >
      <div className="w-full flex justify-center gap-[12px]">
        {arg.map((el) => (
          <ItemChoice
            key={el.id}
            {...{
              el,
              isChosen: chosen === el.val,
              handleClick,
            }}
          />
        ))}
      </div>
    </WrapField>
  );
};

export default ChoseClr;
