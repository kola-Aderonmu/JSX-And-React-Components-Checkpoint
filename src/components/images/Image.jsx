import React from "react";
import product from "../../product";

const Image = () => {
  return (
    <img
      src={product.imagePath}
      alt={product.name}
      style={{
        width: "20rem",
        padding: "10px",
        outline: "none",
        border: "none",
        margin: "auto"
        
      }}
    />
  );
};

export default Image;
