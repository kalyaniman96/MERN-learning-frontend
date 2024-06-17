import React, { useState } from "react";
import malaiKofta from "../Assets/malai kofta.jpg";
import paneerPizza from "../Assets/paneer pizza.jpg";
import paneerTikka from "../Assets/paneer tikka.jpg";
import springRoll from "../Assets/spring roll.jpg";
//first 'npm i date-format' then import it and use it as below
import dateFormat from "dateformat";
//modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Carousel = () => {
  // Format the date using the `date-format` module,
  const today = new Date();
  // console.log(today);
  const formattedDate = dateFormat(today, "ddd, mmm dd, yyyy");
  //react modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //style component
  const styles = {
    date: {
      //to place the content of an element(which is a block element) at the center of a row must use the following 3 properties together
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "green",
    },
  };

  return (
    <>
      <div>
        <h2 style={styles.date}>{formattedDate}</h2>
      </div>
      {/* modal */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Admin login
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* modal */}
      <div id="carouselExampleIndicators" className="carousel slide mt-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={springRoll}
              alt="..."
              className="d-block mx-auto"
              style={{ width: "500px", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={malaiKofta}
              alt="..."
              className="d-block mx-auto"
              style={{ width: "500px", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={paneerPizza}
              alt="..."
              className="d-block mx-auto"
              style={{ width: "500px", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={paneerTikka}
              alt="..."
              className="d-block mx-auto"
              style={{ width: "500px", height: "400px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
