import styled from "styled-components";

const ErrorStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .container {
    flex: 1;
    margin: 0 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #575756;
    margin: 0;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: normal;
    color: #575756;
    margin-top: 40px;
    margin-bottom: 11px;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #575756;
  }

  .secondary {
    font-family: "Norms";
    width: 277px;
    outline: none;
    padding-top: 4px;
  }

  .error-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .error-img {
    width: 196px;
    height: 177px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 900px) {
    .container {
      margin: 0 50px;
    }

    h2 {
      font-size: 40px;
      line-height: 1.3;
    }

    p {
      font-size: 18px;
      line-height: 1.44;
      margin-bottom: 32px;
    }

    h3 {
      margin-top: 32px;
      margin-bottom: 17px;
    }

    .secondary {
      width: 303px;
      height: 48px;
      font-size: 18px;
    }

    .error-body {
      flex-direction: row-reverse;
      text-align: left;
      margin-top: 51px;
    }

    .info {
      max-width: 416px;
      align-items: flex-start;
    }

    .error-img {
      width: 503px;
      height: 442px;
      margin-left: 113px;
    }
  }
`;

export default ErrorStyles;
