import React from "react";
import product from "../../product";

export const Price = () => (
  <p style={{ fontSize: "20px", fontWeight: "700", color: "#ff6347", marginLeft: "45px", marginTop: "10px" }}>
    {product.price}
  </p>
);
