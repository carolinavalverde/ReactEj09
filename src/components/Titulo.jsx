import React from "react";

const Titulo = () => {
  return (
    <section>
      <div className="container text-center text-light p-2 mb-4 titulo">
        <h1>Veterinaria Narices Frías</h1>
      </div>
      <div className="container mb-4">
        <h2 className="text-success">Administrador de citas para veterinaria 🐾</h2>
        <span className="lead text-success">
          Llenar el formulario para agregar una cita
        </span>
      </div>
    </section>
  );
};

export default Titulo;
