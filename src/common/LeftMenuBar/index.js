import React from 'react';
import { Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '../../routes';
import {
  Logo,
  CampaignIcon,
  TeamsIcon,
  LeadsIcon,
  ReportsIcon,
  HelpIcon,
} from '../../asset/img';
import { SideBar, LinkStyled, LogoStyled } from './styled';

const LeftMenuBar = () => {
  const {pathname = ''} = useLocation();
  return <SideBar>
    <Row>
      <LogoStyled>
        <Link to={ROUTES.BASE}><Logo /></Link>
      </LogoStyled>
      <LinkStyled isActive={ROUTES.CAMPAIGN === pathname}>
        <Link to={ROUTES.CAMPAIGN}><CampaignIcon /></Link>
      </LinkStyled>
      <LinkStyled isActive={ROUTES.TEAMS === pathname}>
        <Link to={ROUTES.TEAMS}><TeamsIcon /></Link>
      </LinkStyled>
      <LinkStyled isActive={ROUTES.CONTACTS === pathname}>
        <Link to={ROUTES.CONTACTS}><LeadsIcon /></Link>
      </LinkStyled>
      <LinkStyled isActive={ROUTES.REPORTS === pathname}>
        <Link to={ROUTES.REPORTS}><ReportsIcon /></Link>
      </LinkStyled>
    </Row>
    <LinkStyled isActive={ROUTES.HELP === pathname}>
      <Link to={ROUTES.HELP}><HelpIcon /></Link>
    </LinkStyled>
  </SideBar>
};

export default LeftMenuBar;
