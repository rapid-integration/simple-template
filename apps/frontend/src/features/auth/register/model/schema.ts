import { z } from "zod";

import { UserPasswordSchema, UserUsernameSchema } from "@/entities/user";

export const RegisterFormSchema = z
  .object({
    username: UserUsernameSchema,
    password1: UserPasswordSchema,
    password2: UserPasswordSchema,
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Подтверждение нового пароля не совпадает с новым паролем.",
    path: ["password2"],
  });
