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
    message: `Имя пользователя должно быть минимум ${USER_USERNAME_MIN_LENGTH} символов.`,
  })
  .max(USER_USERNAME_MAX_LENGTH, {
    message: `Имя пользователя должно быть максимум ${USER_USERNAME_MAX_LENGTH} символов.`,
  })
  .regex(new RegExp(USER_USERNAME_PATTERN), {
    message: "Имя пользователя должно содержать только a-z, A-Z, 0-9 и _.",
  });

export const UserPasswordSchema = z
  .string()
  .min(USER_PASSWORD_MIN_LENGTH, {
    message: `Пароль должен быть минимум ${USER_PASSWORD_MIN_LENGTH} символов.`,
  })
  .max(USER_PASSWORD_MAX_LENGTH, {
    message: `Пароль должен быть максимум ${USER_PASSWORD_MAX_LENGTH} символов.`,
  })
  .regex(new RegExp(USER_PASSWORD_PATTERN), {
    message: "Пароль должен содержать только a-z, A-Z, 0-9 и !@#$%^&*.",
  });
