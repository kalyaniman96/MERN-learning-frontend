import React, { useRef, useState } from "react";
//for phone-number field first 'npm i react-phone-number-input' , then import the following 2 resources
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [phone, setPhone] = useState();
  const [file, setFile] = useState([]);
  const fileInputRef = useRef();

  //style component
  const styles = {
    headings: {
      fontWeight: "bold",
      color: "green",
      fontSize: "20px",
    },

    phoneField: {
      marginTop: "10px",
    },
  };

  const validateForm = () => {
    let emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let phoneRegx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

    if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email id");
    } else if (!emailRegx.test(email)) {
      alert("your email id is invalid");
    } else if (message === "") {
      alert("message field can not be empty");
    } else if (phone === "") {
      alert("Please enter your phone number");
    } else if (!phoneRegx.test(phone)) {
      alert("your phone number is invalid");
    } else {
      //   console.log(formData);
      alert("Data submitted successfully");
      //   setFormSubmitted(true);
    }
  };

  const clearForm = () => {
    // alert("hello");
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setFile([]);
    fileInputRef.current.value = null;
  };

  // to save data inside local storage
  localStorage.setItem("Name", name);

  const handleFileSelection = (e) => {
    let selectedFiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      console.log("+++File: ", e.target.files[i]);
      selectedFiles.push(URL.createObjectURL(e.target.files[i]));
    }
    setFile(selectedFiles);
  };

  const handleFileDeselection = (index) => {
    let updatedFiles = [];
    if (window.confirm("Are you sure you want to delete this Image?")) {
      updatedFiles = file.filter((_, i) => i !== index);
      setFile(updatedFiles);
      console.log("+++data", updatedFiles);
      // Reset the file input field with the updated files
      // fileInputRef.current.value = updatedFiles.map((item) => item);
    }
  };

  return (
    <div className="container-fluid">
      <div className="form-box">
        <h1 style={styles.headings}>Simple Contact Form</h1>
        <div>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              className="form-control"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              className="form-control"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label for="fileUpload">File Upload</label>
            <input
              type="file"
              ref={fileInputRef}
              className="custom-file-input"
              id="fileUpload"
              onChange={handleFileSelection}
              multiple
            ></input>
          </div>
          <div className="form-group">
            {/* <img src={file} width="100px" height="100px" /> */}

            {file.length > 0 &&
              file.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "inline-block",
                      flexDirection: "row",
                      padding: "5px",
                    }}
                  >
                    <img src={item} width="100px" height="100px" />
                    <i
                      class="bi bi-x-circle"
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "row",
                      }}
                      onClick={() => handleFileDeselection(index)}
                    ></i>
                  </div>
                );
              })}
          </div>

          <div className="form-group" style={styles.phoneField}>
            <PhoneInput
              id="phone"
              placeholder="Enter phone number"
              defaultCountry="IN"
              value={phone}
              onChange={setPhone}
            />
          </div>
          <input
            className="btn btn-primary mt-2"
            value="Submit"
            type="submit"
            onClick={validateForm}
          />
          <input
            className="btn btn-secondary mt-2"
            value="Clear"
            type="submit"
            onClick={clearForm}
          />
        </div>
      </div>
      <div className="container-fluid">
        <iframe
          title="map"
          style={{ width: "100%", margin: "50px 0 0", height: "300px" }}
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
