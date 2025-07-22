/** @jsxImportSource @emotion/react */
"use client";

import { FormFieldT } from "@/common/types/uiFactory";
import { FieldValues, Path } from "react-hook-form";

type PropsType<T extends FieldValues, K extends Path<T>> = {
  el: FormFieldT<T, K>;
};

const FormField = <T extends FieldValues, K extends Path<T>>({
  el,
}: PropsType<T, K>) => {
  return (
    <label htmlFor={el.name} className="w-full grid grid-cols-1 gap-[12px]">
      <span className="justify-self-start txt__h_xxs text-[var(--gray__sec_3)]">
        {el.label}
      </span>
    </label>
  );
};

export default FormField;
