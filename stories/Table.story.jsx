import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Table, Col, Row, Icon, AnchorButton } from "../src/index";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;
`;

const medicalPersonsData = [
  {
    name: "Alexander Fleming",
    birthday: "6 August 1881",
    knownFor: "Discovery of penicillin",
    wikiLink: "https://en.wikipedia.org/wiki/Alexander_Fleming"
  },
  {
    name: "Edward Jenner",
    birthday: "17 May 1749",
    knownFor: "Pioneer of the smallpox vaccine",
    wikiLink: "https://en.wikipedia.org/wiki/Edward_Jenner"
  },
  {
    name: "William Osler",
    birthday: "12 July, 1849",
    knownFor: "Created the first specialty training for physicians",
    wikiLink: "https://en.wikipedia.org/wiki/William_Osler"
  }
];

storiesOf("Table", module)
  .add("basic", () => {
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
        <Table data={medicalPersonsData} columns={columns} />
      </LayoutStyles>
    );
  })
  .add("auto sizing column widths", () => {
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
        <Table data={medicalPersonsData} columns={columns} />
      </LayoutStyles>
    );
  })
  .add("custom cell contents", () => {
    // eslint-disable-next-line react/prop-types
    const PatientCell = ({ name, birthday }) => (
      <Row>
        <Icon name="user" style={{ fontSize: "30px", padding: "10px" }} />
        <Row verticalAlign="middle">
          <Col>
            <div>{name}</div>
            <small>Born {birthday}</small>
          </Col>
        </Row>
      </Row>
    );

    const columns = [
      {
        Header: "Patient",
        id: "name",
        accessor: data => ({ name: data.name, birthday: data.birthday }),
        Cell: row => <PatientCell {...row.value} />
      },
      {
        Header: "Known for",
        accessor: "knownFor"
      },
      {
        accessor: "wikiLink",
        id: "wikiLink",
        maxWidth: 200,
        Cell: row => (
          <AnchorButton href={row.value} target="_blank" type="tertiary">
            Learn more
          </AnchorButton>
        )
      }
    ];

    return (
      <LayoutStyles>
        <Table data={medicalPersonsData} columns={columns} />
      </LayoutStyles>
    );
  });
