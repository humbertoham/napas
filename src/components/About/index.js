import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MapP from "../../images/factory.svg";
import Mision from "../../images/eng.svg";
import Vision from "../../images/mind.svg";
import Valores from "../../images/review.svg";
import Aos from "aos";
import "aos/dist/aos.css";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Wrapper id="about">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <Content data-aos="fade-right">
              <Text>
                <h1>¿Quiénes somos?</h1>
                <p>
                  Somos un grupo de personas que se encarga de dar un servicio
                  especializado ofreciendo los productos relacionados con la
                  piel para calzado, carnaza, ganuza, forros, de muy buena
                  calidad y a los mejores precios.
                </p>
              </Text>
              <MapC className="right" data-aos="fade-up">
                <Map src={MapP} />
              </MapC>
            </Content>
          </SwiperSlide>
          <SwiperSlide>
            <Content data-aos="fade-right">
              <MapC className="dp" data-aos="fade-up">
                <Map src={Mision} />
              </MapC>
              <Text>
                <h1>Misión</h1>
                <p>
                  Nuestra misión es que nuestro producto llegué a todos ustedes
                  mediante estás plataformas y sobre todo ofrecerles el mejor
                  producto y a los mejores precios.
                </p>
              </Text>
              <MapC className="db" data-aos="fade-up">
                <Map src={Mision} />
              </MapC>
            </Content>
          </SwiperSlide>

          <SwiperSlide>
            <Content data-aos="fade-right">
              <Text>
                <h1>Visión</h1>
                <p>
                  Satisfacer las necesidades del cliente ofreciendoles un
                  producto decalidad y bajo costo considerando la necesidad del
                  cliente, trabajando con transpariencia ofreciendo un producto
                  de calidad.
                </p>
              </Text>
              <MapC className="right" data-aos="fade-up">
                <Map src={Vision} />
              </MapC>
            </Content>
          </SwiperSlide>
          <SwiperSlide>
            <Content data-aos="fade-right">
              <Text>
                <h1>Valores</h1>
                <p>
                  Honestidad, confianza, compromiso, empatía, transparencia,
                  respeto, calidad e innovación
                </p>
              </Text>
              <MapC className="right" data-aos="fade-up">
                <Map src={Valores} />
              </MapC>
            </Content>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
};
export default About;
