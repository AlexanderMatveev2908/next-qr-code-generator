import { isStr } from "@shared/first/lib/validators.js";

export const genUrlParams = <T>(obj: T) => {
  const urlParams = new URLSearchParams();

  for (const k in obj) {
    const v = obj[k as keyof T];

    if ([undefined, null].some((t) => t === v)) continue;

    if (["string", "number", "boolean"].some((t) => t === typeof v)) {
      urlParams.append(k, v + "");
    } else if (typeof v === "object" && !Array.isArray(v)) {
      urlParams.append(k, JSON.stringify(v));
    } else if (Array.isArray(v)) {
      let i = 0;

      while (i < v.length) {
        const curr = v[i];

        if (typeof curr === "string") {
          urlParams.append(`${k}[]`, curr);
        } else if (typeof curr === "object" && isStr(curr.val)) {
          urlParams.append(`${k}[]`, JSON.stringify(curr));
        }
        i++;
      }
    }
  }

  // for (const [k, v] of urlParams.entries()) {
  //   __cg("📄", k, v);
  // }

  return urlParams + "";
};
