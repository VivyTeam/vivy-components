import styled from "styled-components";
import { Colors } from "../index";

const FontStyles = styled.div`
  br {
    margin-bottom: 32px;
  }

  h5 {
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: ${Colors.textSecondary};
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #353f41;
    margin: 6px 0;
  }

  h2 {
    font-size: 2.25m;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: normal;
    color: #353f41;
    margin: 6px 0;
  }

  a {
    display: block;
    text-decoration: none;
    color: #00bfac;
  }
`;

export default FontStyles;
