import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../../src/index";
import {
  SidebarStyles,
  ItemStyles,
  ActiveIndicator,
  SidebarHeaderStyles
} from "./sidebar.style";
import logo from "../../public/images/vivy_logo/logo/logo_2.svg";

const Item = ({ iconName, active, children }) => {
  return (
    <ItemStyles active={active}>
      <Row textAlign="center" verticalAlign="middle">
        <ActiveIndicator active={active} />
        <Icon name={iconName} />
        {children}
      </Row>
    </ItemStyles>
  );
};
Item.propTypes = {
  iconName: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
Item.defaultProps = {
  active: false
};

const Sidebar = ({ children }) => {
  return (
    <SidebarStyles>
      <Col>
        <SidebarHeaderStyles>
          <Row verticalAlign="middle">
            <img src={logo} alt="Vivy logo" />
            <span>Vivy Pro</span>
          </Row>
        </SidebarHeaderStyles>
        {children}
      </Col>
    </SidebarStyles>
  );
};
Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Sidebar.Item = Item;
export default Sidebar;
