import z from "zod";

export enum SizeQr {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

const argSizes = Object.values(SizeQr);

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

  size: z.preprocess(
    (val) => (argSizes.includes(val as SizeQr) ? val : undefined),
    z
      .enum(argSizes)
      .or(z.undefined())
      .refine((v) => !!v, {
        message: "Size is required",
      })
  ),
});

export type PostQrFormT = z.infer<typeof postQrForm>;
