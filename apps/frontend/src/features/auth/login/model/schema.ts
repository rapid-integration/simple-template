import { z } from "zod";

import { UserPasswordSchema, UserUsernameSchema } from "@/entities/user";

export const LoginFormSchema = z.object({
  username: UserUsernameSchema,
  password: UserPasswordSchema,
});
