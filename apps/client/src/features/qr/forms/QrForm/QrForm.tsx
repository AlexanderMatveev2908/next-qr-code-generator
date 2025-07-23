/** @jsxImportSource @emotion/react */
"use client";

import FormField from "@/common/components/forms/inputs/FormField";
import CheckDrop from "@/common/components/forms/inputs/CheckDrop";
import { LinkSvg, MagicSvg } from "@/common/components/SVGs";
import { useFocus } from "@/core/hooks/etc/useFocus";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { type FC } from "react";
import { Path, useFormContext } from "react-hook-form";
import { optColor, optFormat, optSize, urlField } from "./uiFactory";
import ChoseClr from "@/common/components/forms/inputs/ChoseClr/ChoseClr";
import WrapAppBtn from "@/common/components/HOC/buttonWrappers/WrapAppBtn";
import { css } from "@emotion/react";

type PropsType = {
  handleSave: () => void;
  isLoading: boolean;
};

const QrForm: FC<PropsType> = ({ handleSave, isLoading }) => {
  const {
    control,
    formState: { errors },
    setFocus,
  } = useFormContext<PostQrFormT>();

  useFocus<PostQrFormT, Path<PostQrFormT>>("url", { setFocus });

  return (
    <form
      onSubmit={handleSave}
      className="w-full h-full py-[25px] px-[10px] sm:px-[20px] xl:p-[32px] bg-white_sec rounded-[16px] grid grid-cols-1 gap-[25px]"
    >
      <FormField
        {...{
          el: urlField,
          control,
          errors,
          Svg: LinkSvg,
        }}
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-[25px]">
        <CheckDrop
          {...{
            name: "size",
            label: "QR Code Size",
            type: "radio",
            arg: optSize,
          }}
        />

        <CheckDrop
          {...{
            name: "format",
            label: "Format",
            type: "radio",
            arg: optFormat,
          }}
        />

        <ChoseClr
          {...{
            arg: optColor,
            label: "Color",
            name: "color",
            type: "radio",
          }}
        />
      </div>

      <WrapAppBtn
        {...{
          label: "Generate QR Code",
          wrapper: "html_button",
          type: "submit",
          scaleUp: 1,
          isLoading,
          Svg: MagicSvg,
          $ctmCss: css`
            background: linear-gradient(
              90deg,
              var(--blue__pmr) 100%,
              var(--purple__pmr) 100%
            );
          `,
        }}
      />
    </form>
  );
};

export default QrForm;
