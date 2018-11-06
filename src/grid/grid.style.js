import styled from "styled-components";

const GridStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .col {
    flex: 1;
    flex-direction: column;
    display: flex;
  }

  .row {
    flex: 1;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .row {
      flex-direction: column;
    }
  }
`;

export default GridStyles;
