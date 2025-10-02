import { z } from "zod/v4/mini";

import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
  USER_PASSWORD_PATTERN,
  USER_USERNAME_MAX_LENGTH,
  USER_USERNAME_MIN_LENGTH,
  USER_USERNAME_PATTERN,
} from "../config";

export const UserUsernameSchema = z.string().check(
  z.minLength(USER_USERNAME_MIN_LENGTH, {
    error: `Имя пользователя должно быть минимум ${USER_USERNAME_MIN_LENGTH} символов.`,
  }),
  z.maxLength(USER_USERNAME_MAX_LENGTH, {
    error: `Имя пользователя должно быть максимум ${USER_USERNAME_MAX_LENGTH} символов.`,
  }),
  z.regex(new RegExp(USER_USERNAME_PATTERN), {
    error: "Имя пользователя должно содержать только a-z, A-Z, 0-9 и _.",
  }),
  z.trim(),
);

export const UserPasswordSchema = z.string().check(
  z.minLength(USER_PASSWORD_MIN_LENGTH, {
    error: `Пароль должен быть минимум ${USER_PASSWORD_MIN_LENGTH} символов.`,
  }),
  z.maxLength(USER_PASSWORD_MAX_LENGTH, {
    error: `Пароль должен быть максимум ${USER_PASSWORD_MAX_LENGTH} символов.`,
  }),
  z.regex(new RegExp(USER_PASSWORD_PATTERN), {
    error: "Пароль должен содержать только a-z, A-Z, 0-9 и !@#$%^&*.",
  }),
  z.trim(),
);
