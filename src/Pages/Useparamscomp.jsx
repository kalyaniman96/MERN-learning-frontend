import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Useparamscomp() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <p style={{ color: "green" }}>{`ID is ${id}`}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
    </div>
  );
}

export default Useparamscomp;
