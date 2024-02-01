import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

const App = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(citasGuardadas);
  }, []);

  const agregarCita = (nuevaCita) => {
    const nuevasCitas = [...citas, nuevaCita];
    setCitas(nuevasCitas);
    localStorage.setItem("citas", JSON.stringify(nuevasCitas));
  };

  const borrarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
    localStorage.setItem("citas", JSON.stringify(nuevasCitas));
  };

  return (
    <section className="container mt-4">
      <Titulo />
      <div className="row">
        <Formulario agregarCita={agregarCita} />
        <div className="container">
          <h2 className="text-center text-success">Citas Registradas</h2>
          {citas.length === 0 ? (
            <p className="lead text-success">No hay citas registradas</p>
          ) : (
            citas.map((cita, index) => (
              <section className="card mb-3" key={index}>
                <div className="card-body text-success">
                  <h5 className="card-title mayuscula">{cita.mascota}</h5>
                  <p className="card-text mayuscula">
                    <strong>Dueño:</strong> {cita.dueño}
                  </p>
                  <p className="card-text">
                    <strong>Fecha:</strong> {cita.fecha}
                  </p>
                  <p className="card-text">
                    <strong>Hora:</strong> {cita.hora}
                  </p>
                  <p className="card-text">
                    <strong>Síntomas:</strong> {cita.sintomas}
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-danger p-2"
                      onClick={() => borrarCita(index)}
                    >
                      Borrar Cita
                    </button>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
