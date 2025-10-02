import { z } from "zod/v4/mini";

import { UserUsernameSchema } from "@/entities/user";

export const UserUpdateUsernameFormSchema = z.object({
  username: UserUsernameSchema,
});
