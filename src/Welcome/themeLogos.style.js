import styled from "styled-components";

const ThemeLogosStyles = styled.div`
  .logo-container {
    width: 60%;
    margin: 0 auto;
    padding: 20px;
  }

  .logo-container .row {
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: rgba(151, 160, 191, 0.3) 0px 4px 6px 0px;
    width: 150px;
    height: 150px;
    background-color: rgb(255, 255, 255);
    flex: 1 1 0%;
    padding: 10px;
    margin: 10px;
    border-radius: 7px;
  }
`;

export default ThemeLogosStyles;
