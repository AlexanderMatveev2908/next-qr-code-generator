import { __cg } from "@shared/first/lib/logger.js";
import { SizeQr } from "@shared/first/schemas/qr.post.js";

export const grabSize = (s: SizeQr) => {
  switch (s) {
    case SizeQr.SM:
      return 200;

    case SizeQr.MD:
      return 300;

    case SizeQr.LG:
      return 400;

    default:
      __cg("size", s);
      throw new Error("Invalid size 😡");
  }
};
