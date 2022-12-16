import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Addplayers from "../components/Addplayers/Addplayers";
import { useAuth0 } from "@auth0/auth0-react";

const List = () => {
  const [listaJugador, setListajugador] = useState([]);
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((response) => {
      setListajugador(response.data);
    });
  }, [listaJugador]);

  const eliminarUsers = async (id) => {
    axios.delete("http://localhost:5000/api/users/" + id).then(() => {
      Swal.fire({
        title: "¿Qué mirás, bobo?",
        text: "Felicidades, El Jugador se elimino con éxito",
        imageUrl:
          "https://estaticos-noticias.unitel.bo/binrepository/1024x611/0c20/1024d512/none/125450566/RBNB/messi_101-4157442_20221209230020.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    });
  };

  return (
    <>
      <div className="container">
        <nav className="justify-content-center text-center">
          <h1 className="title animate__animated animate__backInDown">
            Armá el mejor plantel de la selección Argentina
          </h1>
        </nav>
        <Addplayers />
        <div className="row">
          {listaJugador.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img className="card-img-top" src={item.imagenUrl} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.posicion}</h5>
                  <hr />
                  <p className="card-text">Nombre: {item.nombre}</p>
                  <p className="card-text">Apellido: {item.apellido}</p>
                  <p className="card-text">Posicion: {item.posicion}</p>
                  {isAuthenticated && (
                    <>
                      <Button
                        className="btn btn-danger m-1"
                        onClick={() => eliminarUsers(item._id)}
                      >
                        Eliminar
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
