import z from "zod";
import { enumRadioSchema } from "./common.js";

export enum SizeQr {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export enum FormatQr {
  PNG = "PNG",
  SVG = "SVG",
}

export enum ColorQr {
  "#000" = "#000",
  "#6366F1" = "#6366F1",
  "#16A34A" = "#16A34A",
  "#DC2626" = "#DC2626",
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
  color: enumRadioSchema(ColorQr, {
    label: "Color ",
  }),
});

export type PostQrFormT = z.infer<typeof postQrForm>;
