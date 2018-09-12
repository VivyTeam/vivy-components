import styled, { css } from "styled-components";

const AnimatedImg = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  ${props =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `};
`;

export { AnimatedImg, Wrapper };
