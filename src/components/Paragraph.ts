import styled from "styled-components";

interface ParagraphProps {
  fontColor: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  color: var(${({ fontColor }) => fontColor});
  opacity: 70%;
  line-height: 18px;
  text-align: left;
`;