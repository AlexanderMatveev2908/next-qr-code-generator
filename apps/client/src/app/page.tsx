"use client";

import AppLogo from "@/common/components/elements/AppLogo";
import { css } from "@emotion/react";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <main className="w-full h-full flex flex-col">
      <header className="w-[90%] sm:w-[75%] lg:w-[calc(100%-288px)] mx-auto">
        <div className="w-full flex items-center justify-start gap-[12xp]">
          <AppLogo
            {...{
              $customCSS: css`
                width: 40px;
                height: 40px;
                background: var(--purple__pmr);
              `,
            }}
          />
        </div>
      </header>
    </main>
  );
};

export default Home;
