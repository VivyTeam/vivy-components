import styled from "styled-components";
import { Colors, Button } from "../index";
import { xsMax } from "../constants";

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
`;

export const Content = styled.div`
  z-index: ${zIndex};
  position: relative;
  background: ${Colors.white};
  padding: 16px 16px 24px 16px;
  border-radius: 8px;
  max-width: 920px;

  display: flex;
  flex-direction: column;

  max-height: 70vh;

  @media (max-width: ${xsMax}px) {
    max-height: 80vh;
  }
`;

const ModalMargin = styled.div`
  margin-left: 24px;
  margin-right: 24px;
`;

export const BodyArea = styled(ModalMargin)`
  overflow-y: auto;
  label: scroll-box;
  -webkit-overflow-scrolling: touch;

  flex: 1;
  overflow-y: auto;
`;

export const HeaderArea = styled.div`
  flex: 1 0;
`;

export const ButtonsArea = styled(ModalMargin)`
  flex: 1 0;

  margin-top: 16px;

  // on mobile devices we want the button to be 100 percent of the available width with no margins.
  @media (max-width: ${xsMax}px) {
    button.primary {
      width: 100%;
      margin: 0;
    }
  }
`;

export const SubmitButton = styled(Button)`
  margin-left: 16px;
`;
