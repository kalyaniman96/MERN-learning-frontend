import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import PikaPika from "./Pages/PikaPika";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import demoImages from "./json/demoImages";
import pokemon from "./json/pokemon";
import allPokemon from "./json/allPokemon";
import Pokemons from "./Pages/Pokemons";
import FormData from "./Pages/FormData";
import PokeService from "./Pages/PokeService";
import Useparamscomp from "./Pages/Useparamscomp";
import Profile from "./Pages/Profile";
import LoginForm from "./Pages/LoginForm";
import SignupForm from "./Pages/SignupForm";
import AllUsers from "./Pages/AllUsers";
import UserData from "./Pages/UserData";
import AddUserForm from "./Pages/AddUserForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // notification function of toastify
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
  // Define toast.error function
  const showErrorToast = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <Router>
        {/* Header component should be inside <Router /> because Header component has routing functionalities */}
        <ToastContainer />
        <Header notify={notify} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/formdata" element={<FormData />}></Route>
          <Route
            path="/services"
            element={<Services demoImages={demoImages} />}
          ></Route>
          <Route
            path="/pikapika"
            element={<PikaPika pokemon={pokemon} />}
          ></Route>
          <Route
            path="/pokemons"
            element={<Pokemons allPokemon={allPokemon} />}
          ></Route>
          <Route path="/pokeservice" element={<PokeService />}></Route>
          <Route path="/useparamsdemo/:id" element={<Useparamscomp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/login"
            element={
              <LoginForm notify={notify} showErrorToast={showErrorToast} />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <SignupForm notify={notify} showErrorToast={showErrorToast} />
            }
          ></Route>
          <Route path="/users" element={<AllUsers notify={notify} />}></Route>
          <Route
            path="/userdata"
            element={<UserData notify={notify} />}
          ></Route>
          <Route
            path="/adduser"
            element={
              <AddUserForm notify={notify} showErrorToast={showErrorToast} />
            }
          ></Route>
        </Routes>
      </Router>
      {/* Footer can be outside the Router because it doesn't have any routing functionality */}
      <Footer />
    </>
  );
};

export default App;
