/** @jsxImportSource @emotion/react */
"use client";

import FormField from "@/common/components/forms/inputs/FormField";
import { FormFieldsGen } from "@/core/uiFactory/forms";
import { postQrForm, PostQrFormT } from "@shared/first/schemas/qr.post.js";
import type { FC } from "react";
import { Path, useFormContext } from "react-hook-form";

const QrForm: FC = () => {
  const formCtx = useFormContext<PostQrFormT>();

  const gen = new FormFieldsGen<PostQrFormT, Path<PostQrFormT>>();

  return (
    <form className="w-full h-full p-[32px] bg-[var(--white__sec)] rounded-[16px]">
      <FormField
        {...{
          el: gen.genFieldTxt("url", { label: "Enter Url" }),
        }}
      />
    </form>
  );
};

export default QrForm;
