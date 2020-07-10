import styled from "styled-components";
import Colors from "../Colors";

const checkboxEmpty = ICON_MAPPING["icon-checkbox-empty"];
const checkboxFilled = ICON_MAPPING["icon-checkbox-filled"];

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckMark = styled.label`
  padding: 0;
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #c9c9c9;
  margin-right: 16px;
  cursor: pointer;
`;

export const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
  + ${CheckMark}:after{
    font-family: "vivy-icons";
    content: "\\${checkboxEmpty}";
  }
  &:checked + ${CheckMark}:after {
    font-family: "vivy-icons";
    content: "\\${checkboxFilled}";
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  line-height: 1.38;
  letter-spacing: normal;
`;

export const MetaLabel = styled.label`
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.29;
  letter-spacing: normal;
  padding-left: 3px;
  padding-bottom: 14px;
`;

export const ErrorMetaLabel = styled(MetaLabel)`
  color: ${Colors.destructive};
`;

export const OptionalMetaLabel = styled(MetaLabel)`
  color: ${Colors.textSecondary};
`;
