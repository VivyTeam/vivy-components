import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100%;

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 86px;
    flex-wrap: wrap;
    border-top: solid 0.5px #cdcdcd;
    margin: 0 15%;
  }

  .link {
    display: flex;
    border-right: 1px solid #cdcdcd;
    padding: 0 16px;
    color: #03d4bf;
    font-size: 14px;
    text-decoration: none;

    &:last-child {
      border-right: none;
    }
  }

  @media (max-width: 1200px) {
    .footer {
      margin: 0 10%;
    }
  }

  @media (max-width: 1000px) {
    .footer {
      margin: 0 3%;
    }
  }

  @media (max-width: 540px) {
    .footer {
      height: 54px;
      border-top: none;
    }

    .link {
      padding-right: 10px;
    }
  }
`;

export default FooterStyles;
