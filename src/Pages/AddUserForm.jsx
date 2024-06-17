import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import userSchema from "../Schemas/UserSchema";

const AddUserForm = ({ notify, showErrorToast }) => {
  const initialValues = {
    name: "",
    email: "",
    videos: 0,
    author: "",
    password: "",
    active: false,
    image: "",
  };
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit: (values, action) => {
      handleUserAdd(values);
      action.resetForm();
    },
  });

  const handleUserAdd = async (userdata) => {
    try {
      const formData = new FormData();
      for (const key in userdata) {
        formData.append(key, userdata[key]);
      }

      const res = await axios.post("/insertdata", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        notify("User added successfully");
        navigate("/users");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      showErrorToast("Failed to add user");
    }
  };

  //For uploading files such as image
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      // Set the selected image file in the Formik state
      values.image = file; // or setFieldValue("image", file);
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
              <h1>Add User</h1>
            </div>
            <div className="mb-3">
              <input
                name="name"
                className={`form-control ${
                  errors.name && touched.name && "is-invalid"
                }`}
                type="text"
                placeholder="Name"
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
                name="videos"
                className={`form-control ${
                  errors.videos && touched.videos && "is-invalid"
                }`}
                type="number"
                placeholder="Videos"
                value={values.videos}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.videos && touched.videos ? (
                <p className="invalid-feedback">{errors.videos}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                name="author"
                className={`form-control ${
                  errors.author && touched.author && "is-invalid"
                }`}
                type="text"
                placeholder="Author"
                value={values.author}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.author && touched.author ? (
                <p className="invalid-feedback">{errors.author}</p>
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
              <div className="form-check">
                <input
                  name="active"
                  className={`form-check-input ${
                    errors.active && touched.active && "is-invalid"
                  }`}
                  type="checkbox"
                  checked={values.active}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label className="form-check-label" htmlFor="active">
                  Active
                </label>
                {errors.active && touched.active ? (
                  <p className="invalid-feedback">{errors.active}</p>
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <input
                name="image"
                className={`form-control ${
                  errors.image && touched.image && "is-invalid"
                }`}
                type="file"
                placeholder="Select your photo"
                onChange={handleFileChange}
                onBlur={handleBlur}
              />
              {errors.image && touched.image ? (
                <p className="invalid-feedback">{errors.image}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
                value="submit"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
