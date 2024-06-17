import React from "react";

const Services = ({ demoImages }) => {
  console.log(demoImages);
  // methods or any expressions lke turnery operator in this case should be called inside {}
  return (
    <>
      {demoImages.length > 0 ? (
        demoImages.map((movie) => {
          return (
            <div
              key={movie.id}
              class="card"
              style={{
                width: "18rem",
                display: "inline-flex",
                margin: "5px",
              }}
            >
              <a href={movie.link}>
                <img
                  src={movie.imgsrc}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "287px", height: "400px" }}
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">
                  Title: <span style={{ color: "blue" }}>{movie.title}</span>
                </h5>
                <h6 class="card-text">Sname: {movie.sname}</h6>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-danger"> There is no data available</p>
      )}
    </>
  );
};

export default Services;
