import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { nombre, apellido, dni, email } = formData;

    if (nombre && apellido && dni && email) {
      localStorage.setItem("userData", JSON.stringify(formData));

      Swal.fire("Datos enviados", "", "success");
    } else {
      Swal.fire("Completar todos los datos", "", "error");
    }
  };

  return (
    <Form>
      <Form.Group controlId="nombre">
        <Form.Label className="form-label">Nombre</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          name="nombre"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="apellido">
        <Form.Label className="form-label">Apellido</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          name="apellido"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="dni">
        <Form.Label className="form-label">DNI</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          name="dni"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label className="form-label">Email</Form.Label>
        <Form.Control
          className="form-control"
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button
          className="btn btn-warning my-3 fw-bold text-white"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default Formulario;
