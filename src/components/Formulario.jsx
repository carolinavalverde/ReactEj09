import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const Formulario = ({ agregarCita }) => {
  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mascota || !dueño || !fecha || !hora || !sintomas) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    const nuevaCita = {
      mascota,
      dueño,
      fecha,
      hora,
      sintomas,
    };

    agregarCita(nuevaCita);

    setMascota("");
    setDueño("");
    setFecha("");
    setHora("");
    setSintomas("");

    Swal.fire({
      icon: "success",
      title: "Cita Agregada",
      text: "La cita ha sido registrada correctamente",
    });
  };

  return (
    <section className="container formulario">
      <div className="container d-flex col-12">
        <form className="container p-3 col-6" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="mascota"
              className="form-label text-success fw-bold"
            >
              Nombre de la mascota:
            </label>
            <input
              type="text"
              className="form-control"
              id="mascota"
              placeholder="Nombre de la mascota"
              value={mascota}
              onChange={(e) => setMascota(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dueño" className="form-label text-success fw-bold">
              Nombre del dueño:
            </label>
            <input
              type="text"
              className="form-control"
              id="dueño"
              placeholder="Nombre del dueño"
              value={dueño}
              onChange={(e) => setDueño(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label text-success fw-bold">
              Fecha:
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hora" className="form-label text-success fw-bold">
              Hora:
            </label>
            <input
              type="time"
              className="form-control"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="sintomas"
              className="form-label text-success fw-bold"
            >
              Síntomas:
            </label>
            <textarea
              className="form-control"
              id="sintomas"
              placeholder="Describir síntomas"
              rows="3"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success p-2">
              Agregar Cita
            </button>
          </div>
        </form>
        <div className="container">
          <img
            src="../img/gatonegro.png"
            alt="imagen de gatos negros"
            className="col-6 img-fluid w-100 h-75 rounded m-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Formulario;
