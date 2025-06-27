import createClient from "openapi-fetch";

import { AUTH_MIDDLEWARE } from "./middleware";
import { paths } from "./types";

const client = createClient<paths>({
  baseUrl: "http://host.docker.internal:80/api/",
});

client.use(AUTH_MIDDLEWARE);

export default client;
