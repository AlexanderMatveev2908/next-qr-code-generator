import z from "zod";

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
});

export type PostQrFormT = z.infer<typeof postQrForm>;
