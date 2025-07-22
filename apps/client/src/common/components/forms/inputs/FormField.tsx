/** @jsxImportSource @emotion/react */
"use client";

import { FormFieldT } from "@/common/types/uiFactory";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { IconType } from "react-icons";
import WrapField from "../HOC/WrapField";

type PropsType<T extends FieldValues, K extends Path<T>> = {
  el: FormFieldT<T, K>;
  control: Control<T>;
  errors: FieldErrors<T>;
  cb?: (v: string) => void;
  Svg?: IconType;
};

const FormField = <T extends FieldValues, K extends Path<T>>({
  el,
  control,
  errors,
  cb,
  Svg,
}: PropsType<T, K>) => {
  return (
    <WrapField
      {...{
        label: el.label,
        msg: errors?.[el.name]?.message as string,
      }}
    >
      <Controller
        name={el.name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={el.type}
            required={el.required}
            placeholder={el.place}
            value={field.value ?? ""}
            onChange={(e) => {
              const {
                target: { value },
              } = e;

              field.onChange(value);
              cb?.(value);
            }}
            className="appearance-none outline-none w-full h-[64px] border-2 border-[var(--gray__sec_1)] rounded-[12px] pl-[16px] pr-[40px]"
          />
        )}
      />

      {Svg && (
        <Svg className="absolute top-1/2 -translate-y-1/2 right-[16px] w-[20px] h-[20px] text-[var(--gray__sec_2)]" />
      )}
    </WrapField>
  );
};

export default FormField;
