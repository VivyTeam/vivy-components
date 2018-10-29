import styled from "styled-components";

const ModalStyles = styled.div`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    z-index: 10001;
  }

  .modal-body {
    max-width: 540px;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 0 10px 0 rgba(63, 78, 90, 0.11);
    transform: translate(-50%, -50%);
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;

    @media (max-width: 800px) {
      width: 80%;
      max-width: 331px%;
    }
  }
`;

export default ModalStyles;
