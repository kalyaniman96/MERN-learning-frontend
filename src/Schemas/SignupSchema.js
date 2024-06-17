import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "name must contain at least 2 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(4, "Password must contain at least 4 characters")
    .required("Password is required"),
});

export default signupSchema;
