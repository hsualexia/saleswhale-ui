import React from "react";
import { Row } from 'antd';

import {
  Logo,
  CampaignIcon,
  TeamsIcon,
  LeadsIcon,
  ReportsIcon,
  HelpIcon,
} from "../../asset/img";
import { SideBar, LinkStyled, LogoStyled } from "./styled";

const LeftMenuBar = () => {
  return <SideBar>
    <Row>
      <LogoStyled>
        <Logo />
      </LogoStyled>
      <LinkStyled>
        <CampaignIcon />
      </LinkStyled>
      <LinkStyled>
        <TeamsIcon />
      </LinkStyled>
      <LinkStyled>
        <LeadsIcon />
      </LinkStyled>
      <LinkStyled>
        <ReportsIcon />
      </LinkStyled>
    </Row>
    <LinkStyled>
      <HelpIcon />
    </LinkStyled>
  </SideBar>
};

export default LeftMenuBar;
