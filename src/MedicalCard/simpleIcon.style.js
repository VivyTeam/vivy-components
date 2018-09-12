import styled from "styled-components";

const SimpleIconStyles = styled.div`
  display: flex;
  margin: 8px 10px;
  align-items: center;
  height: 20px;

  .detail {
    font-size: 16px;
    text-align: center;
    color: #575756;
    margin: 0;
  }

  i {
    font-size: 18px;
    margin-right: 5px;
  }

  @media (min-width: 600px) {
    margin: 8px 0;
  }
`;

export default SimpleIconStyles;
