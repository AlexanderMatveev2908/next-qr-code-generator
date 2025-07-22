import { FastifyInstance } from "fastify";
import { genQrCtrl } from "./controllers/post.js";
import { wrapAPI } from "@src/middleware/wrapAPI.js";
import { logJSON } from "@src/middleware/logJSON.js";
import { checkPostQr } from "./middleware/checkPostQr.js";
import { parseQuery } from "@src/middleware/parseQuery.js";

export const routerQr = async (app: FastifyInstance) => {
  app.route({
    url: "/",
    method: "POST",
    preHandler: [parseQuery, logJSON, checkPostQr],
    handler: wrapAPI(genQrCtrl),
  });
};
