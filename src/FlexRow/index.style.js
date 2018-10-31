import styled from "styled-components";

const RowStyles = styled.div`
  .row {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
  }

  .row.reverse {
    flex-direction: row-reverse;
  }

  .col.reverse {
    flex-direction: column-reverse;
  }

  .col-default,
  .col-default-1,
  .col-default-2,
  .col-default-3,
  .col-default-4,
  .col-default-5,
  .col-default-6,
  .col-default-7,
  .col-default-8,
  .col-default-9,
  .col-default-10,
  .col-default-11,
  .col-default-12,
  .col-default-offset-0,
  .col-default-offset-1,
  .col-default-offset-2,
  .col-default-offset-3,
  .col-default-offset-4,
  .col-default-offset-5,
  .col-default-offset-6,
  .col-default-offset-7,
  .col-default-offset-8,
  .col-default-offset-9,
  .col-default-offset-10,
  .col-default-offset-11,
  .col-default-offset-12 {
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: var(--half-gutter-width, 0.5rem);
    padding-left: var(--half-gutter-width, 0.5rem);
  }

  .col-default {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-default-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-default-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-default-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-default-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-default-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-default-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-default-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-default-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-default-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-default-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-default-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-default-12 {
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-default-offset-0 {
    margin-left: 0;
  }

  .col-default-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-default-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-default-offset-3 {
    margin-left: 25%;
  }

  .col-default-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-default-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-default-offset-6 {
    margin-left: 50%;
  }

  .col-default-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-default-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-default-offset-9 {
    margin-left: 75%;
  }

  .col-default-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-default-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-default {
    justify-content: flex-start;
    text-align: start;
  }

  .center-default {
    justify-content: center;
    text-align: center;
  }

  .end-default {
    justify-content: flex-end;
    text-align: end;
  }

  .top-default {
    align-items: flex-start;
  }

  .middle-default {
    align-items: center;
  }

  .bottom-default {
    align-items: flex-end;
  }

  .around-default {
    justify-content: space-around;
  }

  .between-default {
    justify-content: space-between;
  }

  .first-default {
    order: -1;
  }

  .last-default {
    order: 1;
  }
`;

export default RowStyles;
