import styled from "styled-components";

const InputPasswordStyles = styled.div`
  width: 100%;

  button {
    margin: 0;
  }

  .button-position-right {
    width: 54px;
    height: 54px;
    position: absolute;
    right: 0;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;

    i {
      display: flex;
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 30px;
    }
  }
`;

export default InputPasswordStyles;
