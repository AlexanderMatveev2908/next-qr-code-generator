/** @jsxImportSource @emotion/react */
"use client";

import WrapPop from "@/common/components/HOC/WrapPop/WrapPop";
import { useWrapMutation } from "@/core/hooks/api/useWrapMutation";
import { useWrapQuery } from "@/core/hooks/api/useWrapQuery";
import { testSliceAPI } from "@/features/test/slices/api";
import { __cg } from "@shared/first/lib/logger.js";
import { useEffect, useState, type FC } from "react";

const Home: FC = () => {
  const res = testSliceAPI.useGetHelloQuery();

  useWrapQuery({
    ...res,
    showToast: true,
  });

  const [mutate] = testSliceAPI.usePosHelloMutation();
  const { wrapMutation } = useWrapMutation();

  const handleClick = async () => {
    const res = await wrapMutation({
      cbAPI: () => mutate({ msg: "Client message" }),
    });

    __cg("home res", res);
  };

  const [isPop, setIsPop] = useState<boolean | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsPop(true);
    }, 500);
  }, []);
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center gap-20">
      {/* <span className="text-3xl font-bold text-neutral-200">
        Script worked ✌🏽
      </span>

      <button
        onClick={handleClick}
        className="py-2 px-6 rounded-xl w-[300px] border-2 border-white text-xl text-white"
      >
        Click me
      </button> */}

      <WrapPop
        {...{
          isPop,
          setIsPop,
          Content: (
            <p className="tc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              vero voluptatibus sequi dignissimos atque maxime esse
              necessitatibus hic molestias? Maxime saepe enim nam eligendi quas
              consectetur iure magnam, ut voluptas.
            </p>
          ),
        }}
      />
    </div>
  );
};

export default Home;
