import styled from "styled-components";

const MedicalCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #ffffff;
  border: solid 1px #e4e4e4;
  margin: 0 10px;

  img {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    border: solid 1px #e4e4e4;
    margin-top: -65px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    color: #575756;
    margin: 17px 15px 9px 15px;
  }

  p {
    font-size: 16px;
    line-height: 1.25;
    color: #575756;
    margin-top: 0;
    margin-bottom: 22px;
  }

  .user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .medical-data {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .basic-data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .detailed-data {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    width: 100%;
  }

  @media (min-width: 600px) {
    width: 552px;
    margin: 0;

    h2 {
      margin: 17px 0 9px 0;
    }

    img {
      margin-top: 0;
    }

    p {
      margin-bottom: 15px;
    }

    .medical-data {
      align-items: flex-start;
      width: 100%;
    }

    .user-profile {
      display: flex;
      flex-direction: row-reverse;
      padding: 15px 24px;
    }

    .basic-data {
      flex-direction: column;
      justify-content: flex-start;
    }

    .detailed-data {
      border-top: solid 1px #e4e4e4;
    }
  }
`;

export default MedicalCardStyles;
