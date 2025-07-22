import LayoutUi from "@/common/components/HOC/pageWrappers/LayoutUi";
import type { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const layout: FC<PropsType> = ({ children }) => {
  return <LayoutUi>{children}</LayoutUi>;
};

export default layout;
