"use client";

import HeaderPost from "@/features/qr/pages/post/components/HeaderPost";
import QrForm from "@/features/qr/forms/QrForm/QrForm";
import { postQrForm, PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { __cg } from "@shared/first/lib/logger.js";
import { qrSliceAPI } from "@/features/qr/slices/api";
import { useWrapMutation } from "@/core/hooks/api/useWrapMutation";
import { genUrlParams } from "@/core/lib/process";
import { useDispatch, useSelector } from "react-redux";
import { getQrState, qrSlice } from "@/features/qr/slices/slice";
import QrRes from "@/features/qr/components/QrRes/QrRes";
import { v4 } from "uuid";

const Page: FC = () => {
  const formCtx = useForm<PostQrFormT>({
    resolver: zodResolver(postQrForm),
    mode: "onChange",
  });

  const { urlCode, inputUser } = useSelector(getQrState);

  const { handleSubmit } = formCtx;
  const [mutate, { isLoading, data }] = qrSliceAPI.usePostQrMutation();
  const { wrapMutation } = useWrapMutation();
  const dispatch = useDispatch();

  const handleSave = handleSubmit(
    async (data) => {
      const params = genUrlParams(data);

      const res = await wrapMutation({
        cbAPI: () => mutate(params),
      });

      if (!res) return;

      const { blob } = res;
      const url = URL.createObjectURL(blob);
      dispatch(qrSlice.actions.setQr(url));
      dispatch(qrSlice.actions.setInput(data));
    },
    (errs) => {
      __cg("errs", errs);

      return errs;
    }
  );

  return (
    <div className="w-full min-h-screen h-full flex justify-center bg-gray_sec-0">
      {urlCode ? (
        <QrRes
          {...{
            urlCode,
            input: inputUser as PostQrFormT,
            fileName: `${v4()}.${data?.blob.type}`,
          }}
        />
      ) : (
        <div className="py-[73px] xl:px-[288px] h-full w-[90%] sm:w-[75%] xl:w-full flex flex-col items-center gap-[35px]">
          <HeaderPost />

          <FormProvider {...formCtx}>
            <QrForm {...{ handleSave, isLoading }} />
          </FormProvider>
        </div>
      )}
    </div>
  );
};

export default Page;
