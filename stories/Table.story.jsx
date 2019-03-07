import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Table } from "../src/index";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;
`;

storiesOf("Table", module)
  .add("basic", () => {
    const data = [
      {
        name: "Alexander Fleming",
        birthday: "6 August 1881",
        knownFor: "Discovery of penicillin"
      },
      {
        name: "Edward Jenner",
        birthday: "17 May 1749",
        knownFor: "Pioneer of the smallpox vaccine"
      },
      {
        name: "William Osler",
        birthday: "12 July, 1849",
        knownFor: "Created the first specialty training for physicians"
      }
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Birthday",
        accessor: "birthday"
      },
      {
        Header: "Known for",
        accessor: "knownFor"
      }
    ];

    return (
      <LayoutStyles>
        <Table data={data} columns={columns} />
      </LayoutStyles>
    );
  })
  .add("auto sizing column widths", () => {
    const data = [
      {
        name: "Alexander Fleming",
        birthday: "6 August 1881",
        knownFor: "Discovery of penicillin"
      },
      {
        name: "Edward Jenner",
        birthday: "17 May 1749",
        knownFor: "Pioneer of the smallpox vaccine"
      },
      {
        name: "William Osler",
        birthday: "12 July, 1849",
        knownFor: "Created the first specialty training for physicians"
      }
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name",
        maxWidth: 150
      },
      {
        Header: "Birthday",
        accessor: "birthday",
        maxWidth: 150
      },
      {
        Header: "Known for",
        accessor: "knownFor"
      }
    ];

    return (
      <LayoutStyles>
        <Table data={data} columns={columns} />
      </LayoutStyles>
    );
  });
