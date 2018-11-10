import styled from "styled-components";

const ThemeStyles = styled.div`
  .color-box {
    border-radius: 99%;
    margin: 20px;
    padding: 30px;
    height: 100px;
    width: 100px;
  }

  .color-box:hover {
    cursor: pointer;
  }

  .color-box:focus {
    outline: none;
  }

  .color-box:active {
    border: none;
  }

  .color-box .copy {
    color: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
  }

  .color-box:hover .copy {
    visibility: visible;
    opacity: 1;
  }
`;

export default ThemeStyles;
