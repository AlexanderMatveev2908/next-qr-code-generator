"use client";

import { envApp } from "@/core/constants/env";
import Hero from "@/features/home/components/Hero";
import HomeFooter from "@/features/home/components/HomeFooter/HomeFooter";
import { __cg } from "@shared/first/lib/logger.js";
import { type FC } from "react";

const Home: FC = () => {
  __cg("env", envApp);

  return (
    <main className="w-full min-h-screen h-full flex flex-col">
      <Hero />

      <HomeFooter />
    </main>
  );
};

export default Home;
