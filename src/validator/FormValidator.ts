/* import withYup from "next-yup";
 */
import * as yup from "yup";

export const FORMVALIDATOR = {
  email: yup
    .string()
    .required("Email required!")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email!"
    ),

  firstname: yup.string().required("First name is required"),
  password: yup.string().required("password is required"),
};
