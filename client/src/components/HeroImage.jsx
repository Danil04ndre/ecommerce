import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from "swiper";
import telephones from "../assets/telephones.png";
import wardrobe from "../assets/wardrobe.png";
import "../css/HeroImage.css";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const HeroImage = () => {
    SwiperCore.use([Autoplay]);
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      grabCursor={true}
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide>
        <section className="hero-image container">
          <div>
            <h3>SALE EN 30% DE DESCUENTO</h3>
            <h1>Telefonos 2024</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              blanditiis modi earum officia?
            </p>
            <button>Ver mas</button>
          </div>
          <div>
            <img src={telephones} alt="telephones" />
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
      <section className="hero-image container">
          <div>
            <h3>SALE EN 30% DE DESCUENTO</h3>
            <h1>Camas 2024</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              blanditiis modi earum officia?
            </p>
            <button>Ver mas</button>
          </div>
          <div>
            <img src={wardrobe} alt="wardrobe" />
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroImage;
