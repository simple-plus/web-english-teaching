import React from "react";
import Footer from "../footer";
import Header from "../header";

function Pagina({ children }) {
  return (
    <div className="d-flex flex-column flex-fill">
      <Header />
      <div className="container d-flex flex-column flex-fill align-items-center justify-content-center">{children}</div>
      <Footer />
    </div>
  );
}

export default Pagina;
