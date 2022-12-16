import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

const Create = () => {
  const [Equipos, setEquipos] = useState("");
  const [Equipos2, setEquipos2] = useState("");
  const [Estadio, setEstadio] = useState("");
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const partidosCollection = collection(db, "partidos");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(partidosCollection, {
      Equipos: Equipos,
      Equipos2: Equipos2,
      Estadio: Estadio,
    });
    navigate("/Matchdata");
    Swal.fire({
      title: "Felicidades, El Partido se agrego con éxito",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h3 className="text-center card-text">Crea tus propio equipo</h3>
            <div className="card p-2 mt-3">
              <form onSubmit={store}>
                <input
                  className="form-control mb-2"
                  placeholder="Equipo"
                  value={Equipos}
                  onChange={(e) => setEquipos(e.target.value)}
                />

                <input
                  className="form-control mb-2"
                  placeholder="Equipo 2"
                  value={Equipos2}
                  onChange={(e) => setEquipos2(e.target.value)}
                />
                <input
                  className="form-control mb-2"
                  placeholder="Estadio"
                  value={Estadio}
                  onChange={(e) => setEstadio(e.target.value)}
                />
                {isAuthenticated && (
                  <>
                    <button type="submit" className="btn btn-primary creart">
                      Agregar
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
