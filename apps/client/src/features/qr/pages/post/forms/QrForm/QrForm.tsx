/** @jsxImportSource @emotion/react */
"use client";

import FormField from "@/common/components/forms/inputs/FormField";
import { LinkSvg } from "@/common/components/SVGs";
import { useFocus } from "@/core/hooks/etc/useFocus";
import { FormFieldsGen } from "@/core/uiFactory/forms";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { type FC } from "react";
import { Path, useFormContext } from "react-hook-form";

const QrForm: FC = () => {
  const {
    control,
    formState: { errors },
    setFocus,
  } = useFormContext<PostQrFormT>();

  useFocus<PostQrFormT, Path<PostQrFormT>>("url", { setFocus });
  const gen = new FormFieldsGen<PostQrFormT, Path<PostQrFormT>>();

  return (
    <form className="w-full h-full py-[25px] px-[10px] sm:px-[20px] xl:p-[32px] bg-[var(--white__sec)] rounded-[16px]">
      <FormField
        {...{
          el: gen.genFieldTxt("url", {
            label: "Enter Url",
            place: "https://example.com",
          }),
          control,
          errors,
          Svg: LinkSvg,
        }}
      />
    </form>
  );
};

export default QrForm;
