/** @jsxImportSource @emotion/react */
"use client";

import FormField from "@/common/components/forms/inputs/FormField";
import CheckDrop from "@/common/components/forms/inputs/CheckDrop";
import { LinkSvg } from "@/common/components/SVGs";
import { useFocus } from "@/core/hooks/etc/useFocus";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { type FC } from "react";
import { Path, useFormContext } from "react-hook-form";
import { optSize, urlField } from "./uiFactory";

const QrForm: FC = () => {
  const {
    control,
    formState: { errors },
    setFocus,
  } = useFormContext<PostQrFormT>();

  useFocus<PostQrFormT, Path<PostQrFormT>>("url", { setFocus });

  return (
    <form className="w-full h-full py-[25px] px-[10px] sm:px-[20px] xl:p-[32px] bg-[var(--white__sec)] rounded-[16px] grid grid-cols-1 gap-[25px]">
      <FormField
        {...{
          el: urlField,
          control,
          errors,
          Svg: LinkSvg,
        }}
      />

      <CheckDrop
        {...{
          name: "size",
          label: "QR Code Size",
          type: "radio",
          arg: optSize,
        }}
      />
    </form>
  );
};

export default QrForm;
