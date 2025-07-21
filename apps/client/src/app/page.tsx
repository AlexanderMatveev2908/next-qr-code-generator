"use client";

import Hero from "@/features/home/components/Hero";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <main className="w-full h-full flex flex-col">
      <Hero />
    </main>
  );
};

export default Home;
