"use client";

import HeaderPost from "@/features/qr/pages/post/components/HeaderPost";
import QrForm from "@/features/qr/forms/QrForm/QrForm";
import { postQrForm, PostQrFormT } from "@shared/first/schemas/qr.post.js";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { __cg } from "@shared/first/lib/logger.js";
import { qrSliceAPI } from "@/features/qr/slices/api";
import { useWrapMutation } from "@/core/hooks/api/useWrapMutation";
import { genUrlParams } from "@/core/lib/process";

const Page: FC = () => {
  const formCtx = useForm<PostQrFormT>({
    resolver: zodResolver(postQrForm),
    mode: "onChange",
  });

  const { handleSubmit } = formCtx;
  const [mutate, { isLoading }] = qrSliceAPI.usePostQrMutation();
  const { wrapMutation } = useWrapMutation();

  const handleSave = handleSubmit(
    async (data) => {
      const params = genUrlParams(data);

      await wrapMutation({
        cbAPI: () => mutate(params),
      });
    },
    (errs) => {
      __cg("errs", errs);

      return errs;
    }
  );

  return (
    <div className="w-full min-h-screen h-full flex justify-center bg-[var(--gray__sec_0)]">
      <div className="py-[73px] xl:px-[288px] h-full w-[90%] sm:w-[75%] xl:w-full flex flex-col items-center gap-[35px]">
        <HeaderPost />

        <FormProvider {...formCtx}>
          <QrForm {...{ handleSave, isLoading }} />
        </FormProvider>
      </div>
    </div>
  );
};

export default Page;
