import { PostQrFormT, SizeQr } from "@shared/first/schemas/qr.post.js";

const genSizeInfo = (val: SizeQr) => {
  const num = 200 + (val === SizeQr.LG ? 200 : val === SizeQr.MD ? 100 : 0);

  return `${num}x${num}`;
};

const garbNow = () => {
  const date = new Date();
  const dd = (date.getDate() + "").padStart(2, "0");
  const mm = (date.getMonth() + 1 + "").padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};

export const buildInfoResult = (arg: Partial<PostQrFormT>) => [
  {
    label: "Size",
    val: genSizeInfo(arg.size),
  },
  {
    label: "Format",
    val: arg.format,
  },
  {
    label: "Color",
    val: arg.color,
  },
  {
    label: "Created At",
    val: garbNow(),
  },
];
