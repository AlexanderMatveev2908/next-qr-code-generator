import z from "zod";
import { enumRadioSchema } from "./common.js";

export enum SizeQr {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export enum FormatQr {
  PNG = "PNG",
  JPEG = "JPEG",
  SVG = "SVG",
}

export const postQrForm = z.object({
  url: z
    .string()
    .min(1, "Url is required")
    .refine(
      (v) => {
        try {
          new URL(v);
          return true;
        } catch (err) {
          return false;
        }
      },
      {
        message: "Invalid Url",
      }
    )
    .refine((v) => v.startsWith("https://"), {
      message: "are allowed only https urls",
    }),

  size: enumRadioSchema(SizeQr, {
    label: "Size",
  }),
  format: enumRadioSchema(FormatQr, {
    label: "Format",
  }),
});

export type PostQrFormT = z.infer<typeof postQrForm>;
