import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { MedicalCard } from "../index";

const CollectionStyles = styled.div`
  width: 80%;
  margin: 0 auto;

  .layout-body {
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

storiesOf("Collections", module).add(
  "Medical ID",
  withInfo("A simple page with topbar, body, footer")(() => (
    <CollectionStyles>
      <div className="layout-body">
        <MedicalCard
          user={{
            name: "Demo User",
            dateOfBirth: "1970-01-01"
          }}
          data={{
            pregnancyDueDate: {
              data: "1970-01-01"
            },
            gender: {
              text: "Female",
              icon: "gender-female"
            },
            weight: "82",
            height: "180",
            bloodType: "A-",
            organDonor: "yes"
          }}
          lastUpdatedAt="1970-01-01"
        />
      </div>
    </CollectionStyles>
  ))
);
