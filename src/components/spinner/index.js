import React from "react";

function Spinner() {
  return (
    <div className="text-center p-3">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
