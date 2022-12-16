import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

const Edit = () => {
  const [Equipos, setEquipos] = useState("");
  const [Equipos2, setEquipos2] = useState("");
  const [Estadio, setEstadio] = useState("");

  const { isAuthenticated } = useAuth0();

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const partidos = doc(db, "partidos", id);
    const data = { Equipos: Equipos, Equipos2: Equipos2, Estadio: Estadio };
    await updateDoc(partidos, data);
    navigate("/Matchdata");
    Swal.fire({
      title: "Felicidades, El Partido se modifico con éxito",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const getProductById = async (id) => {
    const partidos = await getDoc(doc(db, "partidos", id));
    if (partidos.exists()) {
      setEquipos(partidos.data().Equipos);
      setEquipos2(partidos.data().Equipos2);
      setEstadio(partidos.data().Estadio);
    } else {
      console.log("No existe");
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);
  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h3 className="text-center card-text">Modificar información</h3>
            <div className="card p-2 mt-3">
              <form onSubmit={update}>
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

export default Edit;
