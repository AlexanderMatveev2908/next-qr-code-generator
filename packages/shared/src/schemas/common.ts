import z from "zod";

export const enumRadioSchema = <T extends Record<string, string>>(
  enumArg: T,
  { label }: { label: string }
): z.ZodType<T[keyof T], any, any> => {
  const arg = Object.values(enumArg);

  return z.preprocess(
    (val) => (arg.includes(val as T[keyof T]) ? val : undefined),
    z
      .enum(arg)
      .or(z.undefined())
      .refine((v) => !!v, {
        message: `${label} is required`,
      })
  );
};
