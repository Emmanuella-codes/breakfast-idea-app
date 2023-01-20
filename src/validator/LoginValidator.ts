import * as yup from "yup";

export const LOGINVALIDATOR = {
  email: yup
    .string()
    .email("It must be a valid email")
    .required("Provide a valid email address"),
  password: yup
    .string()
    .min(8, "Minimum of 8 characters")
    .required("Please Enter your password"),
};
