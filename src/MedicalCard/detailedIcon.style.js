import styled from "styled-components";

const DetailedIconStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  i {
    font-size: 26px;
    color: #575756;
  }

  .icon-detail {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    color: #575756;
  }

  .detail-title {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.54;
    color: #898988;
    margin-top: 12px;
    margin-bottom: 7px;
  }
`;

export default DetailedIconStyles;
