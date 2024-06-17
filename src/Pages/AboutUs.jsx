import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const name = localStorage.getItem("Name");

  const [inputValue, setInputValue] = useState();
  const count = useRef(0);
  const notify = (message) =>
    toast.success(message, {
      //Using Toast Emitter for styling configurations
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });

  // console.log(name);
  // const handleLogout = () => {
  //   localStorage.clear("token");
  //   notify("logout successful");
  //   navigate("/login");
  // };
  // const isLogin = () => {
  //   const token = localStorage.getItem("token");
  //   console.log("+++token", token);

  //   if (token === null) {
  //     navigate("/login");
  //   } else {
  //     navigate("/about");
  //   }
  // };

  // useEffect(() => {
  //   isLogin();
  // });

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className="container mb-5">
      <div className="row mt-3">
        <div className="col bg-info rounded p-3 ">
          <h1>About Us</h1>
          {/* <div>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div> */}
          <p>
            Welcome to our food delivery app! We are passionate about bringing
            delicious meals right to your doorstep.
          </p>
          <p>
            Our mission is to provide convenient, reliable, and fast food
            delivery services while offering a wide range of cuisines to satisfy
            every craving.
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col bg-info rounded p-3 ">
          <h2>Our Team</h2>
          <p>Meet the dedicated team behind our food delivery app:</p>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - CTO</li>
            <li>Michael Johnson - Head of Operations</li>
            <li>Sarah Williams - Marketing Manager</li>
          </ul>
        </div>
      </div>
      <div className="row mt-3 pb-3">
        <div className="col bg-info rounded p-3">
          <h2>Our Values</h2>
          <p>We are committed to:</p>
          <ul>
            <li>Providing exceptional customer service</li>
            <li>Ensuring food safety and quality</li>
            <li>Supporting local restaurants and businesses</li>
            <li>Continuously improving our app to enhance user experience</li>
          </ul>
        </div>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>Render Count: {count.current}</p>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/", { state: { userName: "Iman" } });
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
