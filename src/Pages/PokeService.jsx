import React, { useState, useEffect } from "react";
import axios from "axios";

//*** use of 'async' directly with arrow function is not a valid syntax in react , so it will give error/
const PokeService = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  const getData = async () => {
    try {
      let res = await axios.get("https://pokeapi.co/api/v2/pokemon");
      // we will get an object in the response, from which we need to access the array named 'results' using 'data' property of axios
      setPokemon(res.data.results.map((p) => p.name));
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const showData = () => {
    setIsHidden(false);
  };

  const hideData = () => {
    setIsHidden(true);
  };

  return (
    <>
      <h1>List of pokemons</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <button
              className="btn btn-info"
              style={{ float: "right" }}
              onClick={showData}
            >
              Show
            </button>
          </div>
          <div class="col-lg">
            <button className="btn btn-warning" onClick={hideData}>
              Hide
            </button>
          </div>
        </div>
      </div>
      <div>
        {isHidden
          ? ""
          : pokemon.map((p) => (
              <div
                class="card"
                style={{
                  width: "18rem",
                  display: "inline-block",
                  margin: "10px",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">{p}</h5>
                  {/* <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a> */}
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default PokeService;
