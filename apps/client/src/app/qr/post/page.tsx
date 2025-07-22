"use client";

import HeaderPost from "@/features/qr/pages/post/components/HeaderPost";
import QrForm from "@/features/qr/pages/post/forms/QrForm/QrForm";
import { postQrForm, PostQrFormT } from "@shared/first/schemas/qr.post.js";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Page: FC = () => {
  const formCtx = useForm<PostQrFormT>({
    resolver: zodResolver(postQrForm),
    mode: "onChange",
  });

  return (
    <div className="w-full min-h-screen h-full flex justify-center bg-[var(--gray__sec_0)]">
      <div className="py-[73px] xl:px-[288px] h-full w-[90%] sm:w-[75%] xl:w-full flex flex-col items-center gap-[35px]">
        <HeaderPost />

        <FormProvider {...formCtx}>
          <QrForm />
        </FormProvider>
      </div>
    </div>
  );
};

export default Page;
