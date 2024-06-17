import React from "react";
import pikachuImage from "../Assets/Pikachu-lightning-rod.png";
import axios from "axios";

const PikaPika = ({ pokemon }) => {
  // console.log(pokemon);

  // methods or any expressions like ternary operator in this case should be called inside {}
  return (
    <>
      {pokemon.length > 0 ? (
        // Map over the outer array
        pokemon.map((item) => {
          return (
            <div>
              {" "}
              {/* Map over the inner array */}
              {item.abilities.map((nestedItem) => {
                return (
                  <div
                    key={nestedItem.slot}
                    class="card"
                    style={{
                      width: "18rem",
                      display: "inline-block",
                      margin: "5px",
                    }}
                  >
                    <img src={pikachuImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        Name:{" "}
                        <span style={{ color: "blueviolet" }}>
                          {nestedItem.ability.name}
                        </span>
                      </h5>
                      <h6 class="card-text">Slot: {nestedItem.slot}</h6>
                      <h6 class="card-text">
                        Is Hidden:{" "}
                        {nestedItem.is_hidden ? (
                          <p style={{ color: "green", display: "inline" }}>
                            True
                          </p>
                        ) : (
                          <p style={{ color: "red", display: "inline" }}>
                            False
                          </p>
                        )}
                      </h6>
                      <a
                        href={nestedItem.ability.url}
                        class="btn btn-primary"
                        target="_blank"
                      >
                        Watch here
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <p className="text-danger"> There is no data available</p>
      )}
    </>
  );
};

export default PikaPika;
