import React from "react";
import centerStyles from "./center.module.scss";

const Center = ({ children }) => (
  <div className={centerStyles.container}>{children}</div>
);

export default Center;
