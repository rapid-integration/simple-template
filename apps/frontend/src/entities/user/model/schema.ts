import z from "zod";

import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
  USER_PASSWORD_PATTERN,
  USER_USERNAME_MAX_LENGTH,
  USER_USERNAME_MIN_LENGTH,
  USER_USERNAME_PATTERN,
} from "../config";

export const UserUsernameSchema = z
  .string()
  .min(USER_USERNAME_MIN_LENGTH, {
    message: `Username must be at least ${USER_USERNAME_MIN_LENGTH} characters.`,
  })
  .max(USER_USERNAME_MAX_LENGTH, {
    message: `Username must be at least ${USER_USERNAME_MAX_LENGTH} characters.`,
  })
  .regex(new RegExp(USER_USERNAME_PATTERN), {
    message: "Username must contain only a-z, A-Z, 0-9 and _.",
  });


export const UserPasswordSchema = z
  .string()
  .min(USER_PASSWORD_MIN_LENGTH, {
    message: `Password must be at least ${USER_PASSWORD_MIN_LENGTH} characters.`,
  })
  .max(USER_PASSWORD_MAX_LENGTH, {
    message: `Password must be at least ${USER_PASSWORD_MAX_LENGTH} characters.`,
  })
  .regex(new RegExp(USER_PASSWORD_PATTERN), {
    message: "Password must contain only a-z, A-Z, 0-9 and !@#$%^&*.",
  });
