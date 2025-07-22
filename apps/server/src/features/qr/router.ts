import { FastifyInstance } from "fastify";
import { genQrCtrl } from "./controllers/post.js";
import { wrapAPI } from "@src/middleware/wrapAPI.js";
import { logJSON } from "@src/middleware/logJSON.js";

export const routerQr = async (app: FastifyInstance) => {
  app.route({
    url: "/",
    method: "POST",
    preHandler: [logJSON],
    handler: wrapAPI(genQrCtrl),
  });
};
