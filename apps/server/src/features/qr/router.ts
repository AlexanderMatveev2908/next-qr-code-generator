import { FastifyInstance } from "fastify";
import { genQrCtrl } from "./controllers/post.js";
import { wrapAPI } from "@src/middleware/wrapAPI.js";

export const routerQr = async (app: FastifyInstance) => {
  app.route({
    url: "/",
    method: "POST",
    preHandler: [],
    handler: wrapAPI(genQrCtrl),
  });
};
