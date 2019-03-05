import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../index";
import {
  SidebarStyles,
  LinkStyles,
  ActiveIndicator,
  SidebarHeaderStyles
} from "./sidebar.style";

const renderableChildrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

const Link = ({ iconName, active, href, children }) => {
  return (
    <LinkStyles active={active}>
      <a href={href}>
        <Row textAlign="center" verticalAlign="middle">
          <ActiveIndicator active={active} />
          <Icon name={iconName} />
          {children}
        </Row>
      </a>
    </LinkStyles>
  );
};
Link.propTypes = {
  iconName: PropTypes.string.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: renderableChildrenPropType.isRequired
};
Link.defaultProps = {
  active: false
};
Link.displayName = "Sidebar.Link";

const Header = ({ logoUrl, logoAltText, href, children }) => (
  <SidebarHeaderStyles>
    <a href={href}>
      <Row verticalAlign="middle">
        <img src={logoUrl} alt={logoAltText} />
        {children}
      </Row>
    </a>
  </SidebarHeaderStyles>
);
Header.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: renderableChildrenPropType.isRequired
};
Header.displayName = "Sidebar.Header";

const Sidebar = ({ children }) => {
  return (
    <SidebarStyles>
      <Col>{children}</Col>
    </SidebarStyles>
  );
};
Sidebar.propTypes = {
  children: renderableChildrenPropType.isRequired
};

Sidebar.Header = Header;
Sidebar.Link = Link;
export default Sidebar;
