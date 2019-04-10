import styled from "styled-components";
import { Colors } from "../index";

const zIndex = 10;
export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndex};
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalStyles = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndex};
`;

export const Content = styled.div`
  z-index: ${zIndex};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  background: ${Colors.white};
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 2px;
  min-width: 320px; /* This just a default width */
`;
