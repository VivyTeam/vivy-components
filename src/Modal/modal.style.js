import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10; // This must be at a higher index to the rest of your page content
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalStyles = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Content = styled.div`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 2px;
  min-width: 320px; /* This just a default width */
`;
