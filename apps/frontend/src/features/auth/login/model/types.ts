import { z } from "zod";

import { LoginFormSchema } from "./schema";

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
