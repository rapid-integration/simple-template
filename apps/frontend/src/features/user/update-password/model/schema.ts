import z from "zod";

import { UserPasswordSchema } from "@/entities/user/model/schema";

export const UserUpdatePasswordFormSchema = z
  .object({
    oldPassword: UserPasswordSchema,
    newPassword1: UserPasswordSchema,
    newPassword2: UserPasswordSchema,
  })
  .refine((data) => data.newPassword1 === data.newPassword2, {
    message: "New passwords do not match",
    path: ["newPassword2"],
  });
