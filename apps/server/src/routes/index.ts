import { routerQr } from "@src/features/qr/router.js";
import { testRouter } from "@src/features/test/router.js";
import { routerWakeUp } from "@src/features/wakeUp/router.js";
import { FastifyInstance } from "fastify";

export const router = async (app: FastifyInstance) => {
  app.register(testRouter, { prefix: "test" });
  app.register(routerWakeUp, { prefix: "wake-up" });
  app.register(routerQr, { prefix: "/qr" });
};
