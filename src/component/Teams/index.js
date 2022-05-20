import React, { useState } from 'react';
import { Col } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import Activities from './Activities';
import TeamsData from './TeamsData';
import { TeamsIcon } from '../../asset/img';
import { BannerContainer, InputStyled, TitleStyled, TabContainer, ButtonStyled, MenuStyled, MainContainer } from './styled';

const tabOptions = [
  {
    label: 'All',
    key: 'all',
  },
  {
    label: 'Favorites',
    key: 'favourites',
  },
  {
    label: 'Archived',
    key: 'archived',
  },
]

const Teams = () => {
  const [menuSelect, setMenuSelect] = useState('all')
  const onMenuClick = stuff => {
    setMenuSelect(stuff.key)
  }
  return <>
    <BannerContainer>
      <Col>
        <TitleStyled><TeamsIcon />Teams</TitleStyled>
      </Col>
      <Col>
        <ButtonStyled><PlusOutlined/> CREATE NEW TEAM</ButtonStyled>
      </Col>
    </BannerContainer>
    <>
      <TabContainer justify="space-between">
        <Col flex="auto">
          <MenuStyled defaultSelectedKeys={["all"]} onClick={onMenuClick} mode="horizontal" items={tabOptions}/>
        </Col>
        <Col flex="200px">
          <InputStyled placeholder="Search team name ..." prefix={<SearchOutlined/>}/>
        </Col>
      </TabContainer>
    </>
    <MainContainer gutter={[32]}>
      <Col span={18}>
        <TeamsData filterData={menuSelect}/>
      </Col>
      <Col span={6}>
        <Activities/>
      </Col>
    </MainContainer>
  </>
};

export default Teams;