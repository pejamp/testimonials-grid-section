import styled from "styled-components";

interface HomeProps {
  space?: string;
}

export const Container = styled.div`
  margin: 0 auto;
  padding: 64px 24px;
  display: grid;
  gap: 24px;
  box-sizing: border-box;
  
  // Responsive
  @media screen and (min-width: 1024px) {
    max-width: 1200px;
    width: 100%;
    height: 100vh;
    padding: 150px 0;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Flex = styled.div<HomeProps>`
  display: flex;
  align-items: center;
  column-gap: ${({ space }) => space};
  position: relative;
  z-index: 5;

  &.col {
    flex-direction: column;
    align-items: flex-start;
    row-gap: ${({ space }) => space};
  }
`;
