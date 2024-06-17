import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import signupSchema from "../Schemas/SignupSchema";
import axios from "axios";

const SignupForm = ({ notify, showErrorToast }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // axios.defaults.baseURL = "http://localhost:3002";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        signup(values);
        action.resetForm();
      },
    });

  const signup = async (userData) => {
    try {
      let res = await axios.post("/signup", userData);
      if (res.status === 200) {
        notify("Registration successful, Please login to continue");
      }
    } catch (error) {
      console.log("+++ Error fetching data:", error);
      showErrorToast("error occurred during registartion !!! Please try again");
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
              <h1>Registration Form</h1>
            </div>
            <div className="mb-3">
              <input
                name="name"
                className={`form-control ${
                  errors.name && touched.name && "is-invalid"
                }`}
                type="text"
                placeholder="Full name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="invalid-feedback">{errors.name}</p>
              ) : null}
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
                Signup
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
                Already registered ?&nbsp;
                <Link className="link" to="/login" style={{ color: "blue" }}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
