import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

const Addplayers = () => {
  const [listaJugador, setListajugador] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [posicion, setPosicion] = useState("");

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((response) => {
      setListajugador(response.data);
    });
  }, [listaJugador]);

  const addJugador = async () => {
    let obj = { nombre, apellido, posicion };
    const res = await axios.post("http://localhost:5000/api/users", obj);
    setListajugador(res.data);
    Swal.fire({
      title: "¡Mirá que te como!",
      text: "Felicidades, El Jugador se creo con éxito",
      imageUrl:
        "https://www.clarin.com/img/2021/09/25/19mOLlQC6_1256x620__1.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    setNombre("");
    setApellido("");
    setPosicion("");
  };

  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h3 className="justify-content-center text-center title2">
              Lista de convocados: {listaJugador.length}{" "}
              <i className="fa-sharp fa-solid fa-futbol"></i>
            </h3>
            <div className="card p-2 mt-3">
              <input
                className="form-control mb-2"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

              <input
                className="form-control mb-2"
                placeholder="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
              <input
                className="form-control mb-2"
                placeholder="posicion"
                value={posicion}
                onChange={(e) => setPosicion(e.target.value)}
              />
              {isAuthenticated && (
                <>
                  <button
                    className="btn btn-primary creart"
                    onClick={addJugador}
                  >
                    Agregar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addplayers;
