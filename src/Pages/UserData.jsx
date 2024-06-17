import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const UserData = ({ notify }) => {
  // const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [videos, setVideos] = useState(null);
  const [active, setActive] = useState(null);
  const [image, setImage] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.userid;
  console.log(id);

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/getdata/${id}`);
      console.log("+++ API response: ", res.data.userData);
      // setUser(res.data.userData);
      setName(res.data.userData.name);
      setEmail(res.data.userData.email);
      setVideos(res.data.userData.videos);
      setActive(res.data.userData.active);
      setImage(res.data.userData.image);
      console.log(
        "+++ User data >>> " +
          " name: " +
          name +
          ", email: " +
          email +
          ", videos: " +
          videos +
          ", active: " +
          active
      );
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateUserData = async (userId) => {
    try {
      const updatedData = {
        name: name,
        email: email,
        videos: videos,
        active: active,
        image: image,
      };
      console.log("+++ Updated data: ", updatedData);
      await axios.put(
        `http://localhost:3002/updateData/${userId}`,
        updatedData
      );
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const validateFormAndUpdate = () => {
    // let emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email id");
      // } else if (!emailRegx.test(email)) {
      //   alert("your email id is invalid");
    } else if (videos === "") {
      alert("This field can not be empty");
    } else if (active === "") {
      alert("This field can not be empty");
    } else {
      updateUserData(id);
      navigate("/users");
      notify("User data has been updated successfully");
    }
  };

  return (
    <div className="container-fluid">
      <div className="form-box">
        <h1>Edit user data</h1>
        <div>
          <div className="form-group">
            <label htmlFor="name">Image</label>
            <input
              className="form-control"
              id="name"
              type="text"
              value={image}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Videos</label>
            <input
              className="form-control"
              id="videos"
              value={videos}
              onChange={(e) => setVideos(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="message">Active</label>
            <input
              className="form-control"
              id="active"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            ></input>
          </div>
          <input
            className="btn btn-primary mt-2"
            value="Submit"
            type="submit"
            onClick={() => validateFormAndUpdate(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserData;
