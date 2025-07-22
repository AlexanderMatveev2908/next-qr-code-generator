import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { genQrSvc } from "../services/genQr.js";

export const genQrCtrl = async (req: FastifyRequest, res: FastifyReply) => {
  const { myQuery } = req;

  const data = await genQrSvc(myQuery as PostQrFormT);

  return res.ok200({
    msg: "here u are your qr sir 🧐",
    data,
  });
};
