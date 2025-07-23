import { FastifyInstance } from "fastify";
import { genQrCtrl } from "./controllers/post.js";
import { wrapAPI } from "@src/middleware/wrapAPI.js";
import { logJSON } from "@src/middleware/logJSON.js";
import { checkPostQr } from "./middleware/checkPostQr.js";
import { parseQuery } from "@src/middleware/parseQuery.js";

const commonMdw = [parseQuery, logJSON, checkPostQr];

export const routerQr = async (app: FastifyInstance) => {
  app.route({
    url: "/",
    method: "POST",
    preHandler: commonMdw,
    handler: wrapAPI(genQrCtrl),
  });

  app.route({
    url: "/",
    method: "GET",
    preHandler: commonMdw,
    handler: wrapAPI(genQrCtrl),
  });
};
