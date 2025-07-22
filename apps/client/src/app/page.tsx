"use client";

import Hero from "@/features/home/components/Hero";
import HomeFooter from "@/features/home/components/HomeFooter/HomeFooter";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <main className="w-full min-h-screen h-full flex flex-col">
      <Hero />

      <HomeFooter />
    </main>
  );
};

export default Home;
