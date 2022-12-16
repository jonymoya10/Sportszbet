import React from "react";
import Mycarousels from "../components/Carousels/Carousels";
import argentina from "../components/img/argentina.jpg";
import arabia from "../components/img/arabia.saudita.jpg";
import mexico from "../components/img/mexico.jpg";
import polonia from "../components/img/polonia.jpg";

const Home = (animated) => {
  return (
    <>
      <Mycarousels />
      <div className="container mt-2 mb-2">
        <div className="row">
          <div className="justify-content-center text-center">
            <h1 className="title">Argentina en el Mundial 2022 GRUPO C</h1>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-image">
                <img
                  className="d-block w-100"
                  src={argentina}
                  alt="Second slide"
                />
              </div>
              <div className="card-meta text-center card-text">
                <h2>Argentina</h2>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-image">
                <img
                  className="d-block w-100"
                  src={arabia}
                  alt="Second slide"
                />
              </div>
              <div className="card-meta text-center card-text">
                <h2> Arabia S.</h2>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-image">
                <img
                  className="d-block w-100"
                  src={mexico}
                  alt="Second slide"
                />
              </div>
              <div className="card-meta text-center card-text">
                <h2>México</h2>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-image">
                <img
                  className="d-block w-100"
                  src={polonia}
                  alt="Second slide"
                />
              </div>
              <div className="card-meta text-center card-text">
                <h2>Polonia</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
