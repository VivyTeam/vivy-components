import React from "react";
import { Row, Col, Icon } from "../index";
import {
  SidebarStyles,
  LinkStyles,
  ActiveIndicator,
  SidebarHeaderStyles,
} from "./sidebar.style";

type LinkProps = {
  iconName: string;
  active?: boolean;
  href: string;
};

const Link: React.FC<LinkProps> = ({
  iconName,
  active = false,
  href,
  children,
}) => {
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
Link.displayName = "Sidebar.Link";

type HeaderProps = {
  logoUrl: string;
  logoAltText: string;
  href: string;
};

const Header: React.FC<HeaderProps> = ({
  logoUrl,
  logoAltText,
  href,
  children,
}) => (
  <SidebarHeaderStyles>
    <a href={href}>
      <Row verticalAlign="middle">
        <img src={logoUrl} alt={logoAltText} />
        {children}
      </Row>
    </a>
  </SidebarHeaderStyles>
);
Header.displayName = "Sidebar.Header";

interface SideBarSubComponents {
  Link: React.FC<LinkProps>;
  Header: React.FC<HeaderProps>;
}
const Sidebar: React.FC & SideBarSubComponents = ({ children }) => {
  return (
    <SidebarStyles>
      <Col>{children}</Col>
    </SidebarStyles>
  );
};

Sidebar.Header = Header;
Sidebar.Link = Link;
export default Sidebar;
