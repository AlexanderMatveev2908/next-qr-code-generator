/** @jsxImportSource @emotion/react */
"use client";

import { ReactNode, useRef, useState, type FC } from "react";
import { ChevronSvg } from "../SVGs";
import { useMouseOut } from "@/core/hooks/ui/useMouseOut";
import { css } from "@emotion/react";

type PropsType = {
  label: string;
  children: (arg: {
    setIsOpen: React.Dispatch<boolean>;
    twd: string;
  }) => ReactNode;
};

const Drop: FC<PropsType> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null);

  useMouseOut({
    ref: dropRef,
    cb: () => setIsOpen(false),
  });

  return (
    <div className="w-full relative h-[47px]">
      <div
        ref={dropRef}
        className="absolute w-full items-center border-2 border-[var(--gray__sec_0)] rounded-[12px] bg-[var(--white__sec)] overflow-hidden grid grid-cols-1"
        css={css`
          max-height: fit-content;
        `}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="min-w-full h-[47px] flex items-center  justify-between px-[13px] cursor-pointer"
        >
          <span className="txt__b_md">{label}</span>

          <ChevronSvg className="w-[30px] h-[30px] text-[var(--black__sec)]" />
        </div>

        <ul
          className="w-full grid grid-cols-1 overflow-y-auto scroll__app"
          css={css`
            transition: max-height 0.3s, opacity 0.4s;
            max-height: ${isOpen ? `100px` : "0px"};
            pointer-events: ${isOpen ? "all" : "none"};
            opacity: ${isOpen ? "1" : "0"};
          `}
        >
          {children({
            setIsOpen,
            twd: "border-t-2 border-[var(--gray__sec_0)] w-full flex justify-start px-[13px] py-3 cursor-pointer",
          })}
        </ul>
      </div>
    </div>
  );
};

export default Drop;
