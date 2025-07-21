"use client";

import type { FC } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import WrapEventPage from "@/common/components/HOC/pageWrappers/WrapEventPage";
import WrapShadow from "@/common/components/HOC/WrapShadow";

const NotFound: FC = () => {
  return (
    <WrapEventPage
      {...{
        act: "INFO",
        msg: "This is not the page your are looking for",
        Svg: FaCircleQuestion,
      }}
    >
      <div className="w-[250px]">
        <WrapShadow
          {...{
            wrapper: "next_link",
            act: "INFO",
            href: "/",
            label: "Home",
          }}
        />
      </div>
    </WrapEventPage>
  );
};

export default NotFound;
