import type { FC, ReactNode } from "react";
import LayoutUi from "../post/layout";

type PropsType = {
  children: ReactNode;
};

const layout: FC<PropsType> = ({ children }) => {
  return <LayoutUi>{children}</LayoutUi>;
};

export default layout;
