import { z } from "zod/v4";

import { UserPasswordSchema } from "@/entities/user";

export const UserUpdatePasswordFormSchema = z
  .object({
    oldPassword: UserPasswordSchema,
    newPassword1: UserPasswordSchema,
    newPassword2: UserPasswordSchema,
  })
  .refine((data) => data.newPassword1 === data.newPassword2, {
    message: "Новые пароли не совпадают.",
    path: ["newPassword2"],
  });
