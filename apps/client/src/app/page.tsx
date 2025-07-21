import { genIps } from "@shared/first/lib/etc.js";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <main className="w-full h-full flex flex-col">
      <header className="w-[90%] sm:w-[75%] lg:w-[calc(100%-288px)] mx-auto">
        <div className="w-full flex items-center justify-start gap-[12xp]"></div>
      </header>
    </main>
  );
};

export default Home;
