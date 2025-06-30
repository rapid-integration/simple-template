import { chainMiddlewares } from "@/shared/lib/server/middleware";

import { createAuthMiddleware } from "./auth";

export default chainMiddlewares([createAuthMiddleware]);
