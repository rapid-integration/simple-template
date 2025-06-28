import createClient from "openapi-fetch";

import { AUTH_MIDDLEWARE } from "./middleware";
import { paths } from "./types";

const client = createClient<paths>({
  baseUrl: process.env.FRONTEND_API_URL ?? "http://backend:8000/api/",
});

client.use(AUTH_MIDDLEWARE);

export default client;
