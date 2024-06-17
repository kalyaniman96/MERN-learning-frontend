import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  videos: Yup.number()
    .integer("Videos must be an integer")
    .required("Number of videos is required"),
  author: Yup.string().required("Author is required"),
  password: Yup.string()
    .min(4, "Password must contain at least 4 characters")
    .required("Password is required"),
  active: Yup.boolean().required("Active status is required"),
  image: Yup.string(),
});

export default userSchema;
