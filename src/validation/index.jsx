import { object, string } from "yup";

export const step1Val = object({
  name: string()
    .required("*Name is required")
    .min(3, "*Name must be at least 3 characters")
    .max(10, "*Name cannot be more than 10 characters")
    .matches(/^[a-zA-Z]+$/, "*Name can only contain letters"),
  surname: string()
    .required("*Surname is required")
    .min(3, "*Surname must be at least 3 characters")
    .max(15, "*Surname cannot be more than 15 characters")
    .matches(/^[a-zA-Z]+$/, "*Surname can only contain letters"),
});

export const step2Val = object({
  age: string()
    .required("*Age is required")
    .min(1, "*Age must be at least 1 digit")
    .max(2, "*Age must be at most 2 digits")
    .matches(/^[0-9]+$/, "*Age must contain only digits"),
});

export const step3Val = object({
  account: string()
    .required("*Account is required")
    .min(8, "*Account must be at least 8 characters")
    .max(16, "*Account cannot be more than 16 characters")
    .matches(/^[\w-]+$/, "*Account can only contain letters, numbers, and '-' sign"),
});
