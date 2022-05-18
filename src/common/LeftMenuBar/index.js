import React from "react";
import {
  CampaignIcon,
  TeamsIcon,
  LeadsIcon,
  ReportsIcon,
  HelpIcon,
} from "../../asset/img";
import { SideBar, MenuStyled, HelpIconStyled } from "./styled";

const getItem = (key, icon) => {
  return { key, icon };
};
const items = [
  getItem("1", <CampaignIcon />),
  getItem("2", <TeamsIcon />),
  getItem("3", <LeadsIcon />),
  getItem("4", <ReportsIcon />)
];

const LeftMenuBar = () => {
  return <SideBar>
    <MenuStyled
      mode="inline"
      theme="dark"
      items={items}
    />
    <HelpIconStyled>
      <HelpIcon />
    </HelpIconStyled>
  </SideBar>
};

export default LeftMenuBar;
