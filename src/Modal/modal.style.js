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
  opacity: 0.3;
  background-color: #000000;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  padding: 0;

  i {
    font-size: 24px;
    width: 24px;
    height: 24px;
    text-align: center;
    color: #575756;
  }

  div {
    display: inline-flex;
  }
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
  padding: 16px 16px 24px 16px;
  text-align: center;
  border-radius: 8px;
  min-width: 320px; /* This just a default width */
`;

export const BodyContent = styled.div`
  margin-left: 24px;
  margin-right: 24px;
`;
