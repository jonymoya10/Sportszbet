import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

const Show = () => {
  const [partidos, setPartidos] = useState([]);
  const { isAuthenticated } = useAuth0();

  const partidosCollection = collection(db, "partidos");

  const getPartidos = async () => {
    const data = await getDocs(partidosCollection);

    setPartidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePartidos = async (id) => {
    const partidosDoc = doc(db, "partidos", id);
    await deleteDoc(partidosDoc);
    getPartidos();
    Swal.fire({
      title: "¡Eliminado!, Su Partido ha sido eliminado, éxito",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  useEffect(() => {
    getPartidos();
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2 ">
              {isAuthenticated && (
                <>
                  <Link
                    to="/Create"
                    className="btn btn-primary mt-2 mb-2 creart"
                  >
                    Crear
                  </Link>
                </>
              )}
            </div>
            <table className="table table-primary table-hover">
              <thead>
                <tr className="card-text">
                  <th>Partidos</th>
                  <th>Equipo</th>
                  <th>Estadio</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {partidos.map((partidos) => (
                  <tr key={partidos.id}>
                    <td className="card-text">{partidos.Equipos}</td>
                    <td className="card-text">{partidos.Equipos2}</td>
                    <td className="card-text">{partidos.Estadio}</td>
                    <td>
                      {isAuthenticated && (
                        <>
                          <Link
                            to={`/Edit/${partidos.id}`}
                            className="btn btn-light m-1"
                          >
                            <i className="fa-solid fa-pencil"></i>
                          </Link>
                          <button
                            onClick={() => {
                              deletePartidos(partidos.id);
                            }}
                            className="btn btn-danger m-1"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
