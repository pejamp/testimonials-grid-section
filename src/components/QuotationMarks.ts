import styled from "styled-components";

export const QuotationMarks = styled.img`
  width: 100px;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 32px;
  z-index: 1;

  @media screen and (min-width: 1024px) {
    right: 15%;
  }
`;