import styled from 'styled-components';

const height = '45px';
const borderRadius = '28px';

const ButtonStyles = styled.div`
  .primary {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    color: #fff;
    background-color: #04D4BF;
    border: 0;
    border-radius: ${borderRadius};
    height: ${height};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }

  .primary:hover {
    background-color: #05e6c8;
  }

  .primary:focus {
    outline: none;
  }

  .primary:active {
    box-shadow: 0 0 4px 0 rgba(87,87,86,.5);
    background-color: #09cbb8;
  }

  .primary:disabled {
    cursor: not-allowed;
    background-color: #bfbfbf;
    color: rgba(255,255,255,0.8);
  }

  .alt {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    color: #575756;
    background-color: #fff;
    border: 1px solid #575756;
    border-radius: ${borderRadius};
    height: ${height};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }

  .alt:hover {
    color: #05e6c8;
    border-color: #05e6c8;
  }

  .alt:focus {
    outline: none;
  }

  .alt:active {
    color: #09cbb9;
    border-color: #09cbb8;
  }

  .alt:disabled {
    cursor: not-allowed;
    border-color: #bfbfbf;
    color: #898988;
  }

  .danger {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    color: #fff;
    background-color: #e94119;
    border: 0;
    border-radius: ${borderRadius};
    height: ${height};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }

  .danger:hover {
    background-color: #ff4b20;
  }

  .danger:focus {
    outline: none;
  }

  .danger:active {
    box-shadow: 0 0 4px 0 rgba(87,87,86,.5);
    background-color: #d43c18;
  }

  .danger:disabled {
    cursor: not-allowed;
    background-color: #bfbfbf;
    color: rgba(255,255,255,0.8);
  }
`;

export default ButtonStyles;
