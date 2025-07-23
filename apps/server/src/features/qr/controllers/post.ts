import { FormatQr, PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { genQrSvc } from "../services/genQr.js";
import { __cg } from "@shared/first/lib/logger.js";

export const genQrCtrl = async (req: FastifyRequest, res: FastifyReply) => {
  const { myQuery } = req as unknown as {
    myQuery: PostQrFormT;
  };
  const { format } = myQuery;

  const data = await genQrSvc(myQuery);

  if (format === FormatQr.PNG) res.type("image/png").send(data);
  else res.type("image/svg+xml").send(data);
};
