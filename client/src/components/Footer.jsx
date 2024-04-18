import React from "react";
import imageBox from "../assets/icon-box.png";
import imageDeliv from "../assets/icon-deliv.png";
import imageSecu from "../assets/icon-secu.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer container">
      <article>
        <div>
          <img src={imageBox} />
          <h4>Empaques Confiables</h4>
          <p>Cada producto es cuidadosamente empaquetado para su seguridad.</p>
        </div>
        <div>
          <img src={imageDeliv} />
          <h4>Delivery Gratis</h4>
          <p>
            Disfruta de envio gratuito en todos tus pedidos, sin montos minimos.
          </p>
        </div>
        <div>
          <img src={imageSecu} />
          <h4>Seguridad Garantizada</h4>
          <p>
            Tu informacion esta protegida con las mas altas medidas de
            seguridad.
          </p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
