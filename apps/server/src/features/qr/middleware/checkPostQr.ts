import { __cg } from "@shared/first/lib/logger.js";
import { postQrForm } from "@shared/first/schemas/qr.post.js";
import { checkZod } from "@src/lib/checkZod.js";
import { FastifyReply, FastifyRequest } from "fastify";

export const checkPostQr = async (req: FastifyRequest, res: FastifyReply) => {
  const { myQuery } = req;

  const { msg, all, isOk } = checkZod(postQrForm, { data: myQuery });

  if (!isOk)
    return res.err400({
      msg,
      all,
    });
};
