import { CheckFieldT } from "@/common/types/uiFactory";
import { FormFieldsGen } from "@/core/uiFactory/forms";
import { SizeQr } from "@shared/first/schemas/qr.post";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { Path } from "react-hook-form";

const gen = new FormFieldsGen<PostQrFormT, Path<PostQrFormT>>();

export const urlField = gen.genFieldTxt("url", {
  label: "Enter Url",
  place: "https://example.com",
});

export const optSize = [
  gen.genFieldCheck({
    val: SizeQr.SM,
    label: "Small (200 x 200)",
  }),
  gen.genFieldCheck({
    val: SizeQr.MD,
    label: "Medium (300 x 300)",
  }),
  gen.genFieldCheck({
    val: SizeQr.LG,
    label: "Large (400 x 400)",
  }),
].map(
  (el): CheckFieldT<PostQrFormT, Path<PostQrFormT>> => ({
    ...el,
    type: "radio",
  })
);
