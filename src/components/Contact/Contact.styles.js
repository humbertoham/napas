import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
`;

export const Container = styled.div``;

export const Text = styled.div`
  margin: auto;
  padding: 10px;

  h1 {
    font-weight: 100;
    font-family: "LemonSans", sans-serif;
    font-size: var(--fontSuperBig);
    text-align: center;
    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Con = styled.div`
  margin: auto;
  padding: 10px;

  h1 {
    font-family: "P22", sans-serif;
    font-size: var(--fontBig);
    font-weight: 100;
    text-align: center;
    @media (max-width: 768px) {
      font-size: var(--fontMed);
    }
  }
`;
