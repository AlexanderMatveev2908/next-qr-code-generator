import { formatDate } from "./formatters.js";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const __cg = (title?: any, ...args: any[]) => {
  const fallback = typeof title === "string" ? title : "logger ,🚀";
  console.group(fallback.toUpperCase());

  const mergedArgs =
    typeof title === "string" ? args : [title, ...(args ?? [])];

  for (const el of mergedArgs) {
    console.log(el);
  }

  console.groupEnd();

  const trace = new Error();
  const traces = trace.stack?.split("\n");

  let firstTrace: string | undefined;
  for (const t of traces ?? []) {
    if (t.includes("src")) {
      firstTrace = t;
      break;
    }
  }

  const path = firstTrace?.split("src")?.[1];

  console.log(`=> ${path} 🚀 \n ${formatDate(Date.now())} 🕰️`);
};
