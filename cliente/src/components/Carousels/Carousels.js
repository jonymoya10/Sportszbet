import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fotoargentina from "../img/foto-argentina.jpg";
import fotoqatar from "../img/foto-qatar.png";
import fotoqatar2 from "../img/foto-qatar2.png";

const Mycarousels = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={fotoargentina}
              alt="Foto messi"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={fotoqatar} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fotoqatar2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Mycarousels;
