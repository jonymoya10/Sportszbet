import React from "react";
import Show from "../components/Show/Show";

const Matchdata = () => {
  return (
    <>
      <div className="container mt-2 mb-2">
        <Show />
        <nav className="justify-content-center text-center">
          <h1 className="title">
            Todo sobre los 8 estadios del Mundial Qatar 2022
          </h1>
        </nav>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/k0bTGdt/Stadium-974-1-0.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Stadium 974</h5>
                <p className="card-text">
                  Una vez que termine el torneo, será desmantelado y sus partes
                  serán utilizadas para crear instalaciones en Qatar
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/NKRhbd1/Khalifa-International-Stadium-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Khalifa International Stadium</h5>
                <p className="card-text">
                  El estadio, que está ubicado en el centro de todas las sedes,
                  fue reinaugurado en 2017
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/fGb0Kxh/Education-City-Stadium-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Education City Stadium</h5>

                <p className="card-text">
                  Este estadio debe su nombre a que su paisaje está salpicado
                  por universidades líderes
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/d0Qjy5P/Al-Thumama-Stadium-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Al Thumama Stadium</h5>

                <p className="card-text">
                  Durante el Mundial, su capacidad será de 69.000 espectadores y
                  luego será reducida a la mitad
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/y6LzxBQ/Al-Janoub-Stadium-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Al Janoub Stadium</h5>

                <p className="card-text">
                  Ubicado en la localidad sureña de Al Wakrah, con capacidad
                  para 40.000 personas
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/sgY6mTb/Al-Bayt-Stadium.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Al Bayt Stadium</h5>

                <p className="card-text">
                  Está ubicado en la ciudad de Jor, a 45 kilómetros de Doha, y
                  tiene capacidad para albergar a 60.000 espectadores
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/0qLB88Z/Ahmad-Bin-Ali-Stadium-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Al Rayyan Stadium</h5>

                <p className="card-text">
                  Este recinto, también conocido como Estadio Ahmad bin Ali, es
                  la casa de los dos principales clubes de fútbol
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/k8cWq1P/Lusail-Stadium.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lusail Stadium</h5>

                <p className="card-text">
                  Su diseño está inspirado en la danza de luces y sombras de los
                  tradicionales fanales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matchdata;
