import createClient from "openapi-fetch";

import { AUTH_MIDDLEWARE } from "./middleware";
import { paths } from "./types";

export const client = createClient<paths>({ baseUrl: process.env.API_URL });

client.use(AUTH_MIDDLEWARE);
