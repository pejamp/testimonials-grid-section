import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  textColor?: string;
}

export const Text = styled.span<TextProps>`
  font-size: 13px;
  color: var(${({ textColor }) => textColor});
  display: inline-block;

  &.small {
    font-size: 11px;
    opacity: 50%;
  }
`;