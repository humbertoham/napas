import React, { useEffect } from "react";
import { Container, Wrapper } from "./Separator.styles";
import image from "../../images/banner.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Separator = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}></Container>
    </Wrapper>
  );
};

export default Separator;
