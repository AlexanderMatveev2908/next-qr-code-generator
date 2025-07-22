import { __cg } from "@shared/first/lib/logger.js";
import {
  FormatQr,
  PostQrFormT,
  SizeQr,
} from "@shared/first/schemas/qr.post.js";
import qr from "qrcode";

const parserW = {
  [SizeQr.SM]: 200,
  [SizeQr.MD]: 300,
  [SizeQr.LG]: 400,
};

export const genQrSvc = async (data: PostQrFormT) => {
  const { url, color, format, size } = data;

  const opt = {
    width: parserW[size as keyof typeof parserW],
    color: {
      dark: color,
      light: "#fff",
    },
  };

  switch (format) {
    case FormatQr.PNG:
      return await qr.toBuffer(url, { ...opt, type: "png" });

    case FormatQr.SVG:
      return await qr.toString(url, { ...opt, type: "svg" });

    default:
      __cg("format", format);
      throw new Error("Invalid format 😡");
  }
};
