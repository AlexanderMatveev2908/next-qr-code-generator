/** @jsxImportSource @emotion/react */
"use client";

import type { FC, ReactNode } from "react";
import ErrField from "../etc/ErrField";

type PropsType = {
  children: ReactNode;
  label: string;
  msg: string;
};

const WrapField: FC<PropsType> = ({ children, label, msg }) => {
  return (
    <label className="w-full grid grid-cols-1 gap-[12px]">
      <span className="justify-self-start txt__h_xxs text-[var(--gray__sec_3)]">
        {label}
      </span>
      <div className="w-full h-fit relative">
        {children}

        <ErrField
          {...{
            msg,
          }}
        />
      </div>
    </label>
  );
};

export default WrapField;
