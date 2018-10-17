import styled from "styled-components";

const RowStyles = styled.div`
  :root {
    --gutter-width: 1rem;
    --outer-margin: 2rem;
    --gutter-compensation: calc((var(--gutter-width) * 0.5) * -1);
    --half-gutter-width: calc((var(--gutter-width) * 0.5));
    --xs-min: 30;
    --screen-xs-min: var(--xs-min) em;
  }

  .container-fluid,
  .container {
    margin-right: auto;
    margin-left: auto;
  }

  .container-fluid {
    padding-right: var(--outer-margin, 2rem);
    padding-left: var(--outer-margin, 2rem);
  }

  .row {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: var(--gutter-compensation, -0.5rem);
    margin-left: var(--gutter-compensation, -0.5rem);
  }

  .row.reverse {
    flex-direction: row-reverse;
  }

  .col.reverse {
    flex-direction: column-reverse;
  }
  .col-xs,
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
  .col-xs-offset-11,
  .col-xs-offset-12 {
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: var(--half-gutter-width, 0.5rem);
    padding-left: var(--half-gutter-width, 0.5rem);
  }

  .col-xs {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
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

  .start-xs {
    justify-content: flex-start;
    text-align: start;
  }

  .center-xs {
    justify-content: center;
    text-align: center;
  }

  .end-xs {
    justify-content: flex-end;
    text-align: end;
  }

  .top-xs {
    align-items: flex-start;
  }

  .middle-xs {
    align-items: center;
  }

  .bottom-xs {
    align-items: flex-end;
  }

  .around-xs {
    justify-content: space-around;
  }

  .between-xs {
    justify-content: space-between;
  }

  .first-xs {
    order: -1;
  }

  .last-xs {
    order: 1;
  }
`;

export default RowStyles;
