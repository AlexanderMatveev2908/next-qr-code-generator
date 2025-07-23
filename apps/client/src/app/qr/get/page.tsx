"use client";

import WrapCSR from "@/common/components/HOC/pageWrappers/WrapCSR";
import { useWrapQuery } from "@/core/hooks/api/useWrapQuery";
import { qrSliceAPI } from "@/features/qr/slices/api";
import { postQrForm } from "@shared/first/schemas/qr.post.js";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";

const Page: FC = () => {
  const query = useSearchParams();

  const queryObj = Object.fromEntries(query);
  const isOk = postQrForm.safeParse(queryObj).success;

  if (!isOk) throw new Error("Invalid query data");

  const res = qrSliceAPI.useGetQrQuery(query + "", {
    skip: !isOk,
  });
  useWrapQuery({
    ...res,
  });
  const { isLoading, data: { blob } = {} } = res;
  const isApiOk = blob instanceof Blob;

  return (
    <WrapCSR
      {...{
        isApiOk,
        throwErr: true,
        isLoading,
      }}
    >
      <div className=""></div>
    </WrapCSR>
  );
};

export default Page;
