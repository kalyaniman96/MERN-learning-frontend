import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import loginSchema from "../Schemas/LoginSchema";
import axios from "axios";

const LoginForm = ({ notify, showErrorToast }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  // axios.defaults.baseURL = "http://localhost:3002";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        loginWithRedirect(values);
        action.resetForm();
      },
    });

  const loginWithRedirect = async (loginCredentials) => {
    try {
      let res = await axios.post("/login", loginCredentials);
      if (res.status === 200) {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user ID", res.data.logindata._id);
        // const id = localStorage.getItem("user ID");
        // navigate("/profile", { state: { userId: id } });
        navigate("/profile");
        notify("Login successful");
      }
    } catch (error) {
      console.log("+++ Error fetching data:", error);
      showErrorToast("email or password is inavlid");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form
            onSubmit={handleSubmit}
            className="shadow p-3 mt-5 mb-5 bg-white rounded"
          >
            <div className="mb-3">
              <h1>Login Form</h1>
            </div>
            <div className="mb-3">
              <input
                name="email"
                className={`form-control ${
                  errors.email && touched.email && "is-invalid"
                }`}
                type="text"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="invalid-feedback">{errors.email}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                name="password"
                className={`form-control ${
                  errors.password && touched.password && "is-invalid"
                }`}
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="invalid-feedback">{errors.password}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
                value="submit"
              >
                Login
              </button>
            </div>
            <div className="mb-3">
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Don't have an account ?&nbsp;
                <Link className="link" to="/signup" style={{ color: "blue" }}>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
