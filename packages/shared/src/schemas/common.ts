import z from "zod";

export const enumRadioSchema = <T extends Record<string, string>>(
  enumArg: T,
  { label }: { label: string }
) => {
  const arg = Object.values(enumArg);
  z.preprocess(
    (val) => (arg.includes(val as T[keyof T]) ? val : undefined),
    z
      .enum(arg)
      .or(z.undefined())
      .refine((v) => !!v, {
        message: `${label} is required`,
      })
  );
};
