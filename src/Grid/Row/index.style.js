import styled from "styled-components";
import { xsMax, mdMax, smMax } from "../../constants";

const RowStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;

  &.inherited-height {
    height: 100%;
  }

  .row {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    &.reverse {
      flex-direction: row-reverse;
    }

    &.column {
      display: block;
      flex-direction: column;
    }
  }

  .default-width {
    width: 100%;
    flex-basis: 960px;
  }

  .full-width {
    flex-basis: 100%;
  }

  .col,
  .col-lg-0,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-offset-0,
  .col-lg-offset-1,
  .col-lg-offset-2,
  .col-lg-offset-3,
  .col-lg-offset-4,
  .col-lg-offset-5,
  .col-lg-offset-6,
  .col-lg-offset-7,
  .col-lg-offset-8,
  .col-lg-offset-9,
  .col-lg-offset-10,
  .col-lg-offset-11 {
    display: block;
    box-sizing: border-box;
    flex: 0 0 auto;
  }

  .col {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-lg-hide {
    display: none;
  }

  .col-lg-0 {
    flex-basis: 0;
  }

  .col-lg-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-lg-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-lg-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-lg-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-lg-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-lg-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-lg-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-lg-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-lg-12 {
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-lg-offset-0 {
    margin-left: 0;
  }

  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-lg-offset-3 {
    margin-left: 25%;
  }

  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-lg-offset-6 {
    margin-left: 50%;
  }

  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-lg-offset-9 {
    margin-left: 75%;
  }

  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }

  .position-start {
    justify-content: flex-start;
  }

  .position-center {
    justify-content: center;
  }

  .position-end {
    justify-content: flex-end;
    text-align: end;
  }

  .text-align-left {
    text-align: left;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-right {
    text-align: right;
  }

  .top {
    align-items: flex-start;
  }

  .middle {
    align-items: center;
  }

  .bottom {
    align-items: flex-end;
  }

  .around {
    justify-content: space-around;
  }
  .evenly {
    justify-content: space-evenly;
  }

  .between {
    justify-content: space-between;
  }

  @media (max-width: ${mdMax}px) {
    .col-md-0,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11 {
      display: block;
      box-sizing: border-box;
      flex: 0 0 auto;
    }

    .col-md-0 {
      flex-basis: 0;
    }

    .col-md-hide {
      display: none;
    }

    .col-md-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-md-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-md-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-md-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-md-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-md-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-md-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-md-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-md-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-md-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-md-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-md-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-md-offset-0 {
      margin-left: 0;
    }

    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-md-offset-3 {
      margin-left: 25%;
    }

    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-md-offset-6 {
      margin-left: 50%;
    }

    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-md-offset-9 {
      margin-left: 75%;
    }

    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }

    .position-md-start {
      justify-content: flex-start;
    }

    .position-md-center {
      justify-content: center;
    }

    .position-md-end {
      justify-content: flex-end;
      text-align: end;
    }

    .text-align-md-left {
      text-align: left;
    }

    .text-align-md-center {
      text-align: center;
    }

    .text-align-md-right {
      text-align: right;
    }
  }

  @media (max-width: ${smMax}px) {
    .col-sm-0,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-0,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11 {
      display: block;
      box-sizing: border-box;
      flex: 0 0 auto;
    }

    .col-sm-0 {
      flex-basis: 0;
    }

    .col-sm-hide {
      display: none;
    }

    .col-sm-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-sm-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-sm-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-sm-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-sm-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-sm-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-sm-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-sm-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-sm-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-sm-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-sm-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-sm-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-sm-offset-0 {
      margin-left: 0;
    }

    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-sm-offset-3 {
      margin-left: 25%;
    }

    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-sm-offset-6 {
      margin-left: 50%;
    }

    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-sm-offset-9 {
      margin-left: 75%;
    }

    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }

    .position-sm-start {
      justify-content: flex-start;
    }

    .position-sm-center {
      justify-content: center;
    }

    .position-sm-end {
      justify-content: flex-end;
      text-align: end;
    }

    .text-align-sm-left {
      text-align: left;
    }

    .text-align-sm-center {
      text-align: center;
    }

    .text-align-sm-right {
      text-align: right;
    }
  }

  @media (max-width: ${xsMax}px) {
    .col-xs-0,
    .col-xs-1,
    .col-xs-2,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-offset-0,
    .col-xs-offset-1,
    .col-xs-offset-2,
    .col-xs-offset-3,
    .col-xs-offset-4,
    .col-xs-offset-5,
    .col-xs-offset-6,
    .col-xs-offset-7,
    .col-xs-offset-8,
    .col-xs-offset-9,
    .col-xs-offset-10,
    .col-xs-offset-11 {
      display: block;
      box-sizing: border-box;
      flex: 0 0 auto;
    }

    .col-xs-0 {
      flex-basis: 0;
    }

    .col-xs-hide {
      display: none;
    }

    .col-xs-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-xs-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-xs-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-xs-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-xs-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-xs-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-xs-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-xs-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-xs-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-xs-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-xs-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-xs-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-xs-offset-0 {
      margin-left: 0;
    }

    .col-xs-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-xs-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-xs-offset-3 {
      margin-left: 25%;
    }

    .col-xs-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-xs-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-xs-offset-6 {
      margin-left: 50%;
    }

    .col-xs-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-xs-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-xs-offset-9 {
      margin-left: 75%;
    }

    .col-xs-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-xs-offset-11 {
      margin-left: 91.66666667%;
    }

    .position-xs-start {
      justify-content: flex-start;
    }

    .position-xs-center {
      justify-content: center;
    }

    .position-xs-end {
      justify-content: flex-end;
      text-align: end;
    }

    .text-align-xs-left {
      text-align: left;
    }

    .text-align-xs-center {
      text-align: center;
    }

    .text-align-xs-right {
      text-align: right;
    }
  }
`;

export default RowStyles;
