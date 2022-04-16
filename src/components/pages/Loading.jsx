import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.css";
const loading = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader" role="status">
        <div className="loader loader-inner "> </div>
      </div>
    </div>
  );
};

export default loading;
