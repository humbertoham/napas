import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Message,
} from "./Doing.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";
import image4 from "../../images/image4.jpeg";
import image5 from "../../images/image5.jpeg";
import image6 from "../../images/image6.jpeg";
import image7 from "../../images/image7.jpeg";
import image8 from "../../images/image8.jpeg";
import image9 from "../../images/image9.jpeg";
import image10 from "../../images/image10.jpeg";
import image11 from "../../images/image11.jpeg";
import image12 from "../../images/image12.jpeg";
const Doing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="doing">
      <Content>
        <h1>¿Qué es lo que hacemos?</h1>
        <div className="divider"></div>
        <p>
          Contamos con una gran variedad de napas y acabados de exelente calidad
          a los mejores precios contamos con servicio a domicilio enviamos a
          todo México por paquetería o transporte piel para calzado, bolsa y
          cartera.
        </p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image1} />
            <CardHeading>Hoja de piel grabada tib</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja de piel grabada grueso del 1.8 al 2 mm en varios colores
                precio de mercado $2.10 el decímetro enviamos a toda la
                república mexicana.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x 2.10=$4620.00
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image2} />
            <CardHeading>Hoja de piel flor de luz</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja de piel flor de luz Grueso del 1.8 al 2 mm Piel de muy
                buena calidad en varios colores precio de mercado a $2.10 el
                decímetro se hacen envíos a toda la república mexicana.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 pieza 2200 dcm x 2.10=$4620.00
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image3} />
            <CardHeading>Hoja de vacío negra</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja de vacío negra piel de exelente calidad grueso del (1.8 al
                2 mm) y del (2 al 2.2 mm) piel para bota industrial o calzado
                precio de mercado es a $2.00 el decímetro manejo envíos por
                paqueteria o transporte contamos con servicio a domicilio.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x 2.00=$4400
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>

        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image4} />
            <CardHeading>Hoja de piel avestruz</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja de piel avestruz de exelente calidad en varios colores piel
                para bota y calzado el grueso es del 1.8 al 2 mm precio de
                mercado a $2.10 el decímetro contamos con servicio a domicilio.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image5} />
            <CardHeading>Hoja de acabado verde pastel</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja acabada en verde pastel grueso del (1.8 al 2 mm) precio de
                mercado a $1.90 el decímetro se hacen envíos a toda la república
                mexicana.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x 1.90 =$4180
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image6} />
            <CardHeading>Hoja de piel cuello.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja de piel cuello en varios colores grueso del 1.8 al 2 mm
                piel de muy buena calidad precio de mercado a $2.10 el decímetro
                contamos con servicio a domicilio.
              </CardOptionsNote>
              <CardOptionsNote>
                Un bulto contiene 10 piezas 2200 dcm x $2.10=$4620
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image7} />
            <CardHeading>Hoja de guante de amarillo</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja Guante industrial amarilla de flor exelente calidad su
                calibre de la hoja es del 1.2 a 1.3 suavidad garantizada,se
                puede hacer pedidos en blanco y amarillo se produce siempre en
                línea nada de saldos.
              </CardOptionsNote>
              <CardOptionsNote>
                Su precio es a $1.20 el decímetro Bulto contiene 15 a 18 piezas
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image8} />
            <CardHeading>Hoja acabado rosa fiusha</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja acabado rosa fiusha grueso del (1.8 al 2 mm) Precio de
                mercado a $1.90 el decímetro se hacen envíos a toda la república
                mexicana.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x 1.90 =$ 4180
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image9} />
            <CardHeading>Hoja de piel grabado vib.pit.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja de piel en varios colores piel para bota y calzado
                accesorios grueso del 1.8 al 2 mm Precio de mercado a $2.10 el
                decímetro piel de buena calidad manejamos envios por paquetería
                o transporte contamos con servicio a domicilio.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x $2.10=$4620.00
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>

        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image10} />
            <CardHeading>Hoja de piel grabado de canasta</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Hoja de piel grabado de canasta lo manejo en varios gruesos (1.2
                al 1.4)(1.4 al 1.6)(1.6 al 1.8) (1.8 al 2 mm) lo manejo en
                varios colores precio de mercado a $2.10 el decímetro hacemos
                envios a toda la república mexicana.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x 2.10 =$4620.00
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image11} />
            <CardHeading>Hoja de piel floter</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Grueso del (1.8 al 2 mm) exelente calidad en diferentes colores:
                negro,café ,schedron,miel,azul,blanco,vino,etc. puede ir suave o
                armada dependiendo al gusto del cliente. Bota industrial, bolsa
                y carteras,calzado, aceesorios etc.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x 2.10=$4620.00
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image12} />
            <CardHeading>Hoja de piel floter</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Grueso del (1.8 al 2 mm) exelente calidad en diferentes colores:
                negro,café ,schedron,miel,azul,blanco,vino,etc. puede ir suave o
                armada dependiendo al gusto del cliente. Bota industrial, bolsa
                y carteras,calzado, aceesorios etc.
              </CardOptionsNote>
              <CardOptionsNote>
                1 bulto contiene 10 piezas 2200 dcm x 2.10=$4620.00
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
      <Message href="https://wa.me/c/5214775876162"> Catálogo </Message>
    </Wrapper>
  );
};

export default Doing;
