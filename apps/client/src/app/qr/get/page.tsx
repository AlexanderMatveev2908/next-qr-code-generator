"use client";

import WrapCSR from "@/common/components/HOC/pageWrappers/WrapCSR";
import { useWrapQuery } from "@/core/hooks/api/useWrapQuery";
import QrRes from "@/features/qr/components/QrRes/QrRes";
import { qrSliceAPI } from "@/features/qr/slices/api";
import { getQrState, qrSlice } from "@/features/qr/slices/slice";
import { postQrForm, PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

const Page: FC = () => {
  const query = useSearchParams();

  const queryObj = useMemo(() => Object.fromEntries(query), [query]);
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
  const dispatch = useDispatch();
  const { urlCode } = useSelector(getQrState);

  useEffect(() => {
    if (!isApiOk) return;

    dispatch(qrSlice.actions.setQr(URL.createObjectURL(blob)));
    dispatch(qrSlice.actions.setInput(queryObj as PostQrFormT));
  }, [isApiOk, dispatch, blob, queryObj]);

  return (
    <WrapCSR
      {...{
        isApiOk,
        throwErr: true,
        isLoading,
      }}
    >
      <QrRes
        {...{
          fileName: `${v4()}.${blob?.type}`,
          input: queryObj as PostQrFormT,
          urlCode,
        }}
      />
    </WrapCSR>
  );
};

export default Page;
