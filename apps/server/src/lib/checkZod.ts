import { boolean, ZodType } from "zod";

export const checkZod = (schema: ZodType<any>, { data }: { data: any }) => {
  const parsed = schema.safeParse(data);

  if (parsed.success)
    return {
      isOk: true,
    };

  const jsonParsed = JSON.parse(parsed.error?.message);

  return {
    msg: jsonParsed?.[0]?.message,
    all: jsonParsed,
  };
};
