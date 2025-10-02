import { z } from "zod";

import { UserUpdatePasswordFormSchema } from "./schema";

export type UserUpdatePasswordFormValues = z.infer<
  typeof UserUpdatePasswordFormSchema
>;
