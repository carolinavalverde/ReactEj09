import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import Title from "./components/Title";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div className="container-fluid my-3">
      <div className="title p-2 text-succes text-center fw-bold">
        <Title />
      </div>
      <div className="form p-5">
        <Formulario />
      </div>
    </div>
  );
};

export default App;
