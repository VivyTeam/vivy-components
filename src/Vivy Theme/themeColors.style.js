import styled from "styled-components";

const ThemeStyles = styled.div`
  .color-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
  }

  .font-container {
    width: 60%;
    margin: 0 auto;
  }

  .color-box-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .color-box-container h5 {
    margin-top: 0;
  }

  .color-box {
    border-radius: 0.25rem;
    margin: 20px;
    padding: 30px;
    height: 100px;
    width: 100px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  }

  .color-box:hover {
    cursor: pointer;
  }

  .color-box:focus {
    outline: none;
  }

  .color-box:active {
    border: none;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  }

  .color-box #copy {
    color: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
  }

  .color-box:hover #copy {
    visibility: visible;
    opacity: 1;
  }
`;

export default ThemeStyles;
