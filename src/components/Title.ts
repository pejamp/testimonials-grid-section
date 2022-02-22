import styled from "styled-components";

interface TitleProps {
  fontColor: string;
}

export const Title = styled.h1<TitleProps>`
  color: var(${({ fontColor }) => fontColor});
  line-height: 24px;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
`;