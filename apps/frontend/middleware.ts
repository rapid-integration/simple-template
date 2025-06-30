import { createAuthMiddleware } from "@/app/middlewares/auth";
import { chainMiddlewares } from "@/shared/lib/middleware";

export default chainMiddlewares([createAuthMiddleware]);
