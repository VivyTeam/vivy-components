import React, { ReactNode } from "react";
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
  children?: ReactNode;
};

type HeaderProps = {
  logoUrl?: string;
  logoAltText?: string;
  href?: string;
  children?: ReactNode;
};

type SideBarProps = {
  children: ReactNode;
};

interface LinkFC<T> extends React.FC<T> {
  displayName: string;
}

interface HeaderFC<T> extends React.FC<T> {
  displayName: string;
}

interface SideBarFC<Link, Header, Sidebar> extends React.FC<Sidebar> {
  Link: LinkFC<Link>;
  Header: HeaderFC<Header>;
}

const Link: LinkFC<LinkProps> = ({
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

const Header: HeaderFC<HeaderProps> = ({
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

const Sidebar: SideBarFC<LinkProps, HeaderProps, SideBarProps> = ({
  children,
}) => {
  return (
    <SidebarStyles>
      <Col>{children}</Col>
    </SidebarStyles>
  );
};

Sidebar.Header = Header;
Sidebar.Link = Link;
export default Sidebar;
