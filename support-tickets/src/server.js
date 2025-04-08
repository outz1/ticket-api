import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listerner(request, response) {
  await jsonHandler(request, response);
  routeHandler(request, response);
}

http.createServer(listerner).listen(3123);
