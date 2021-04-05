import React from "react";
import { images } from "../tokens/presskit";

const Image = ({ src, alt }) => (
  <img src={`assets/images/${images[src]}`} alt={alt} />
);

export default Image;
