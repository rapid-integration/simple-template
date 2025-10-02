import { z } from "zod";

import { RegisterFormSchema } from "./schema";

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;
