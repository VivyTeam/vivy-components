import styled from "styled-components";
import { SharedAlertStyles } from "./shared.style";

export const AlertStyles = styled(SharedAlertStyles)`
  line-height: 1.29;
  font-size: 14px;
  i {
    padding: 10px 0 10px 16px;
    font-size: 24px;
    display: block;
    text-align: left;
  }
`;

export const TextStyles = styled.div`
  padding: 12px 0;
`;
