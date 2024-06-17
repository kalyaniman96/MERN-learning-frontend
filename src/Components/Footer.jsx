import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4"
      style={{
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
        zIndex: "999" /* Ensure footer is above other content */,
      }}
    >
      <div className="container text-center">
        <p>© 2024 My Homepage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
