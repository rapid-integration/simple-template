import z from "zod";

import { UserUpdateUsernameFormSchema } from "./schema";

export type UserUpdateUsernameFormValues = z.infer<
  typeof UserUpdateUsernameFormSchema
>;
