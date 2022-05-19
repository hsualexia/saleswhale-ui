import React from 'react';
import { Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '../../routes';
import {
  Logo,
  CampaignIcon,
  TeamsIcon,
  LeadsIcon,
  TeamsIconWhite,
  ReportsIcon,
  HelpIcon,
} from '../../asset/img';
import { SideBar, LinkStyled, LogoStyled } from './styled';

const LeftMenuBar = () => {
  const {pathname = ''} = useLocation();
  const isLinkActive = url => {
    if (url === pathname) {
      return true
    }
    return false
  }
  return <SideBar>
    <Row>
      <Link to={ROUTES.BASE}>
        <LogoStyled>
          <Logo />
        </LogoStyled>
      </Link>
      <Link to={ROUTES.CAMPAIGN}>
        <LinkStyled isActive={isLinkActive(ROUTES.CAMPAIGN)}>
          <CampaignIcon/>
        </LinkStyled>
      </Link>
      <Link to={ROUTES.TEAMS}>
        <LinkStyled isActive={isLinkActive(ROUTES.TEAMS)}>
          {isLinkActive(ROUTES.TEAMS) ? <TeamsIconWhite /> : <TeamsIcon/>}
        </LinkStyled>
      </Link>
      <Link to={ROUTES.CONTACTS}>
        <LinkStyled isActive={isLinkActive(ROUTES.CONTACTS)}>
          <LeadsIcon/>
        </LinkStyled>
      </Link>
      <Link to={ROUTES.REPORTS}>
        <LinkStyled isActive={isLinkActive(ROUTES.REPORTS)}>
          <ReportsIcon/>
        </LinkStyled>
      </Link>
    </Row>
    <Link to={ROUTES.HELP}>
      <LinkStyled isActive={isLinkActive(ROUTES.HELP)}>
        <HelpIcon/>
      </LinkStyled>
    </Link>
  </SideBar>
};

export default LeftMenuBar;
