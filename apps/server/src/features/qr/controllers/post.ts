import { FastifyReply, FastifyRequest } from "fastify";

export const genQrCtrl = async (req: FastifyRequest, res: FastifyReply) => {
  return res.ok200({
    msg: "here u are your qr sir 🧐",
  });
};
