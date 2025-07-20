/** @jsxImportSource @emotion/react */
"use client";

import { AppEventT } from "@/common/types/api";
import { useWrapQuery } from "@/core/hooks/api/useWrapQuery";
import { toastSlice } from "@/features/layout/components/Toast/slices";
import { testSliceAPI } from "@/features/test/slices/api";
import type { FC } from "react";
import { useDispatch } from "react-redux";

const Home: FC = () => {
  const res = testSliceAPI.useGetHelloQuery();

  useWrapQuery({
    ...res,
    showToast: true,
  });
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center gap-20">
      <span className="text-3xl font-bold text-neutral-200">
        Script worked ✌🏽
      </span>

      <button
        onClick={() =>
          dispatch(
            toastSlice.actions.open({
              msg: "Opened Toast",
              type: AppEventT.NONE,
            })
          )
        }
        className="py-2 px-6 rounded-xl w-[300px] border-2 border-white text-xl text-white"
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
