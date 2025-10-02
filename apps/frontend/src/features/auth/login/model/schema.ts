import { z } from "zod/v4/mini";

import { UserPasswordSchema, UserUsernameSchema } from "@/entities/user";

export const LoginFormSchema = z.object({
  username: UserUsernameSchema,
  password: UserPasswordSchema,
});
