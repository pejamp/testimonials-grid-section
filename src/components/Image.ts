import styled from "styled-components";

interface ImageProps {
  photo: string;
}

export const Image = styled.div<ImageProps>`
  width: 32px;
  height: 32px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50px;
  overflow: hidden;
  border: 2px solid var(--moderate-light-violet);
`;