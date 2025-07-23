import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePmr: "#6366f1",
        purplePmr: "#8b5cf6",

        greenSec: {
          0: "#dcfce7",
          1: "#16a34a",
        },

        blueSec: {
          0: "#dbeafe",
          1: "#2563eb",
        },

        whiteSec: "#f9fafb",

        graySec: {
          0: "#e5e7eb",
          1: "#ced4da",
          2: "#9ca3af",
          3: "#4b5563",
        },

        blackSec: "#111827",
      },
    },
  },
  plugins: [],
};

export default config;
