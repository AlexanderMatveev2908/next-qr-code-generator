import { DownloadSvg, FlashSvg, TriangleSvg } from "@/common/components/SVGs";

export const infoArg = [
  {
    Svg: FlashSvg,
    title: "Instant Generation",
    argGradient: ["var(--blue__pmr)", "var(--purple__pmr)"],
    desc: "Generate QR codes instantly for any URL or profile link with just one click.",
  },
  {
    Svg: DownloadSvg,
    title: "Easy Download",
    argGradient: ["#22C55E", "#0D9488"],
    desc: "Download your QR code in high quality PNG format for any use case.",
  },
  {
    Svg: TriangleSvg,
    title: "Universal Sharing",
    argGradient: ["#F97316", "#DC2626"],
    desc: "Share your links across platforms with a single scannable code.",
  },
];

export type InfoItemT = (typeof infoArg)[number];
