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
      <LogoStyled>
        <Link to={ROUTES.BASE}><Logo /></Link>
      </LogoStyled>
      <LinkStyled isActive={isLinkActive(ROUTES.CAMPAIGN)}>
        <Link to={ROUTES.CAMPAIGN}><CampaignIcon /></Link>
      </LinkStyled>
      <LinkStyled isActive={isLinkActive(ROUTES.TEAMS)}>
        <Link to={ROUTES.TEAMS}>
          {isLinkActive(ROUTES.TEAMS) ? <TeamsIconWhite /> : <TeamsIcon/>}
        </Link>
      </LinkStyled>
      <LinkStyled isActive={isLinkActive(ROUTES.CONTACTS)}>
        <Link to={ROUTES.CONTACTS}><LeadsIcon /></Link>
      </LinkStyled>
      <LinkStyled isActive={isLinkActive(ROUTES.REPORTS)}>
        <Link to={ROUTES.REPORTS}><ReportsIcon /></Link>
      </LinkStyled>
    </Row>
    <LinkStyled isActive={isLinkActive(ROUTES.HELP)}>
      <Link to={ROUTES.HELP}><HelpIcon /></Link>
    </LinkStyled>
  </SideBar>
};

export default LeftMenuBar;
