import styled, { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Norms', sans-serif;
  }
`;

const ExampleStyles = styled.div`
  .example-container {
    margin: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    text-align: center;
  }

  .example {
    display: flex;
    flex: 1;
    background-color: #e0e0e0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  .example-column {
    display: flex;
    flex: 1;
    background-color: #e0e0e0;
    flex-direction: column;
    align-items: center;
  }

  .example-box {
    display: flex;
    background-color: #575756;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 30px;
    height: 50px;
    width: 50px;
    border-radius: .25rem;
  }

  @media (max-width: 150px) {
    .example-box {
      height: 5px;
      width: 5px;
    }
  }
`;

export default ExampleStyles;
