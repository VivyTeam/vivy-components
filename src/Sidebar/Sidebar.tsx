import React, { useRef, RefObject } from "react";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Icon from "../Icon";

import {
  SidebarStyles,
  LinkStyles,
  ActiveIndicator,
  SidebarHeaderStyles,
  VivyLink,
} from "./sidebar.style";

const eventRouting = (href: string, ref: RefObject<HTMLDivElement>) => {
  ref.current.dispatchEvent(
    new CustomEvent("vivy-routing", {
      bubbles: true,
      composed: true,
      detail: { href },
    })
  );
};

type LinkProps = {
  iconName: string;
  active?: boolean;
  href: string;
  useEvents?: boolean;
};

const Link: React.FC<LinkProps> = ({
  iconName,
  active = false,
  href,
  children,
  useEvents,
}) => {
  const eventDispatcher = useRef<HTMLDivElement>(null);

  const linkContent = () => (
    <Row textAlign="center" verticalAlign="middle">
      <ActiveIndicator active={active} />
      <Icon name={iconName} />
      {children}
    </Row>
  );

  return (
    <LinkStyles active={active}>
      {!useEvents && <a href={href}>{linkContent()}</a>}
      {useEvents && (
        <VivyLink
          style={{ height: "100%" }}
          ref={eventDispatcher}
          onClick={() => eventRouting(href, eventDispatcher)}
        >
          {linkContent()}
        </VivyLink>
      )}
    </LinkStyles>
  );
};
Link.displayName = "Sidebar.Link";

type HeaderProps = {
  logoUrl: string;
  logoAltText: string;
  href: string;
  useEvents?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  logoUrl,
  logoAltText,
  href,
  children,
  useEvents,
}) => {
  const eventDispatcher = useRef<HTMLDivElement>(null);

  const linkContent = () => (
    <Row verticalAlign="middle">
      <img src={logoUrl} alt={logoAltText} />
      {children}
    </Row>
  );

  return (
    <SidebarHeaderStyles>
      {!useEvents && <a href={href}>{linkContent()}</a>}
      {useEvents && (
        <VivyLink
          style={{ height: "100%" }}
          ref={eventDispatcher}
          onClick={() => eventRouting(href, eventDispatcher)}
        >
          {linkContent()}
        </VivyLink>
      )}
    </SidebarHeaderStyles>
  );
};
Header.displayName = "Sidebar.Header";

interface SideBarSubComponents {
  Link: React.FC<LinkProps>;
  Header: React.FC<HeaderProps>;
}

type SideBarProps = {
  useEvents?: boolean;
};

const Sidebar: React.FC<SideBarProps> & SideBarSubComponents = ({
  children,
  useEvents,
}) => {
  return (
    <SidebarStyles>
      <Col>
        {React.Children.map(children as React.ReactElement, (child) =>
          React.cloneElement(child, { useEvents: !!useEvents })
        )}
      </Col>
    </SidebarStyles>
  );
};

Sidebar.Header = Header;
Sidebar.Link = Link;
export default Sidebar;
