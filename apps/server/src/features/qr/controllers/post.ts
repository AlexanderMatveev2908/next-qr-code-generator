import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { genQrSvc } from "../services/genQr.js";

export const genQrCtrl = async (
  req: FastifyRequest<{ Body: PostQrFormT }>,
  res: FastifyReply
) => {
  const { body } = req;

  const data = await genQrSvc(body);

  return res.ok200({
    msg: "here u are your qr sir 🧐",
    data,
  });
};
