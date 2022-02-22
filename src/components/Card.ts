import styled from "styled-components";

interface CardProps {
  theme: string;
}

export const Card = styled.article<CardProps>`
  width: 100%;
  padding: 24px 32px;
  background-color: var(${({ theme }) => theme});
  border-radius: 8px;
  box-shadow: 4px 4px 8px var(--light-gray);
  position: relative;

  // Responsive
  @media screen and (min-width: 1024px) {
    &.col-1 {
      grid-column: 1 / span 2;
    }
    &.col-4-row-2 {
      grid-column: 4;
      grid-row: 1 / span 2;
    }
    &.row-2-col-2 {
      grid-column: 2 / span 2;
      grid-row: 2;
    }
  }
`;