import styled from "styled-components";

const AlertStyle = styled.div`
  padding: 16px;
  border-radius: 8px;
  i {
    font-size: 48px;
  }
`;

const AlertSmallStyle = styled.div`
  height: 44px;
  border-radius: 8px;
  font-size: 14px;
  i {
    font-size: 24px;
  }
`;

export const ContentStyles = styled.div`
  margin-top: 12px;
`;

const withSuccessColors = baseStyle => styled(baseStyle)`
  background-color: #e8f5e5;
  i {
    color: #189f59;
  }
`;

const withWarningColors = baseStyle => styled(baseStyle)`
  background-color: #fff1cb;
  i {
    color: #d97508;
  }
`;

export const AlertSuccessStyles = withSuccessColors(AlertStyle);
export const AlertWarningStyles = withWarningColors(AlertStyle);
export const AlertSmallSuccessStyles = withSuccessColors(AlertSmallStyle);
export const AlertSmallWarningStyles = withWarningColors(AlertSmallStyle);
