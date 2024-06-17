import React from "react";

const Pokemons = ({ allPokemon }) => {
  //   console.log(allPokemon);
  return (
    <>
      {allPokemon.length > 0 ? (
        // Map over the outer array
        allPokemon.map((item) => {
          return (
            <div>
              {" "}
              {/* Map over the inner array */}
              {item.results.map((nestedItem) => {
                return (
                  <div
                    key={nestedItem.name}
                    class="card"
                    style={{
                      width: "18rem",
                      display: "inline-block",
                      margin: "5px",
                    }}
                  >
                    <img
                      src={nestedItem.image}
                      class="card-img-top"
                      alt="..."
                      style={{ width: "287px", height: "141px" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        Name:{" "}
                        <span style={{ color: "blueviolet" }}>
                          {nestedItem.name}
                        </span>
                      </h5>
                      {/* <h6 class="card-text">Slot: {nestedItem.slot}</h6>
                      <a
                        href={nestedItem.ability.url}
                        class="btn btn-primary"
                        target="_blank"
                      >
                        Watch here
                      </a> */}
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

export default Pokemons;
