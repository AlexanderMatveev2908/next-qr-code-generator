/** @jsxImportSource @emotion/react */
"use client";

import { getToastState } from "./slices";
import { $appClr } from "@/core/uiFactory/style";
import { AnimatePresence, motion } from "framer-motion";
import { css } from "@emotion/react";
import { resp } from "@/core/lib/style";
import { varToast } from "./uiFactory";
import { X } from "lucide-react";
import { useToastStages } from "./hooks/useToastStages";
import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";

const Toast: FC = () => {
  const toastState = useSelector(getToastState);
  const dispatch = useDispatch();

  const { clickClose } = useToastStages({
    dispatch,
    toastState,
  });
  const clr = $appClr[toastState.toast.type ?? $appClr.NONE];

  return (
    <AnimatePresence>
      {toastState.isShow && (
        <motion.div
          key={toastState.id}
          className="z__toast fixed top-5 right-5 pb-6 px-5 rounded-2xl bg-[#000] grid grid-cols-1 gap-3 overflow-hidden"
          css={css`
            width: 90%;
            border: 3px solid ${clr};

            ${resp(400)} {
              width: 400px;
            }
            ${resp(600)} {
              width: 500px;
            }
            ${resp(800)} {
              width: 600px;
            }
          `}
          initial={"hidden"}
          variants={varToast}
          animate="open"
          exit="close"
        >
          <div className="w-full flex justify-between items-center pt-2">
            <span
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              css={css`
                color: ${clr};
              `}
            >
              {toastState.toast.type?.toUpperCase()}
            </span>

            <button
              onClick={clickClose}
              className="btn__app text-red-600"
              style={
                {
                  "--scale__up": 1.3,
                } as React.CSSProperties
              }
            >
              <X className="w-[40px] h-[40px]" />
            </button>
          </div>

          <div className="w-full flex justify-center">
            <span className="text-base sm:text-lg md:text-lg lg:text-xl text-neutral-200">
              {toastState.toast.msg.slice(0, 200)}
            </span>
          </div>

          <motion.div
            className="w-full absolute bottom-0 left-0 h-[7.5px] rounded-2xl"
            css={css`
              background: ${clr};
            `}
            initial={{ width: "100%" }}
            transition={{
              duration: toastState.isShow ? 4 : 0,
              ease: "linear",
            }}
            animate={{
              width: toastState.isShow ? 0 : "100%",
            }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
