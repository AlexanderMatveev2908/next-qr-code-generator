/** @jsxImportSource @emotion/react */
"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWakeState, wakeUpSlice } from "./slices/slice";
import { __cg } from "@shared/first/lib/logger.js";
import WrapPop from "@/common/components/HOC/WrapPop/WrapPop";
import { getStorage } from "@/core/lib/storage";
import { StorageKey } from "@/common/types/storage";
import { useWrapListener } from "@/core/hooks/etc/useWrapListener";

type PropsType = {
  children: React.ReactNode;
};

const WrapWakeUp: FC<PropsType> = ({ children }) => {
  const [isPop, setIsPop] = useState<boolean | null>(null);
  const isAwakeRef = useRef<boolean>(false);

  const { wrapListener } = useWrapListener();

  const dispatch = useDispatch();
  const wakeState = useSelector(getWakeState);

  useEffect(() => {
    const handler = () => {
      const lastVal = getStorage(StorageKey.WAKE_UP);

      const delta = Date.now() - +(lastVal ?? 0);
      const min = delta / 1000 / 60;

      if (min < 15) return;

      dispatch(wakeUpSlice.actions.setWakeState(false));
      isAwakeRef.current = false;
      setIsPop(true);
    };

    wrapListener(handler);
  }, [wrapListener, dispatch]);
  return (
    <div className="w-full h-full">
      <WrapPop
        {...{
          isPop,
          setIsPop,
        }}
      >
        <div className="w-full flex"></div>
      </WrapPop>

      {children}
    </div>
  );
};

export default WrapWakeUp;
