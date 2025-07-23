import { CurveArrowSvg, DownloadSvg } from "@/common/components/SVGs";
import { FormatQr } from "@shared/first/schemas/qr.post.js";

export const buildActionsQr = (format: FormatQr) => [
  {
    labelTxt: "Download QR Code",
    note: `Save as ${format === FormatQr.PNG ? "PNG image" : "SVG vector"}`,
    labelBtn: `Download ${format}`,
    Svg: DownloadSvg,
    darkClr: "#16A34A",
    lightClr: "#DCFCE7",
  },
  {
    labelTxt: "Share QR Code",
    note: "Copy link to share",
    labelBtn: "Copy Link",
    Svg: CurveArrowSvg,
    darkClr: "#2563EB",
    lightClr: "#DBEAFE",
  },
];

export type CardActElT = ReturnType<typeof buildActionsQr>[number];
