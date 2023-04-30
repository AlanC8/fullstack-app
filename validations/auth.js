import { body } from "express-validator";
export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Неверный пароль").isLength({
    min: 5,
  }),
  body("fullName", "Укажите имя").isLength({
    min: 5,
  }),
  body("avatarUrl", "Неверная ссылка на Аватарку").optional().isURL(),
];
