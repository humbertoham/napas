import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-attachment: fixed;
  /* Set a specific height */
  min-height: 200px;

  /* Create the parallax scrolling effect */
  background-position: center;

  position: relative;
  z-index: 0;

  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  @media (max-width: 768px) {
    background-attachment: unset;
    min-height: 100px;
  }
`;
