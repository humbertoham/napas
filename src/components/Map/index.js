import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9865618314557!2d-101.66831708506454!3d21.192692785909802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bb93591550727%3A0xabb0fb3ee5fc8e3d!2sBlvrd%20Miguel%20Hidalgo%207059-B%2C%20Los%20Castillos%2C%2037209%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1sen!2smx!4v1644720989481!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
        \
      </Container>
    </Wrapper>
  );
};

export default Map;
