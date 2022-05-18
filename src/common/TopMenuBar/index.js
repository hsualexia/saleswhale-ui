import React from 'react';
import { Avatar, Badge, Popover } from 'antd';
import { ContainerOutlined, CaretDownOutlined } from '@ant-design/icons';

import { current_user as currentUser } from '../../asset/data';
import { TopBar, Container, UserContainer, TextStyled, NarWhalStyled, TeamsStyled } from './styled';

const TopMenuBar = () => {
  // eslint-disable-next-line
  console.log(currentUser)
  return <TopBar>
    <Container>
      <NarWhalStyled>
        NARWHAL
      </NarWhalStyled>
      <TeamsStyled>
        Teams
      </TeamsStyled>
    </Container>
    <UserContainer>
      <Popover placement="bottom" content="Some Notifications" trigger="hover">
        <Badge title="" count={currentUser.notifications_count}><ContainerOutlined style={{ fontSize: '20px' }}/></Badge>
      </Popover>
      <TextStyled>Hello, {currentUser.name}</TextStyled>
      <Avatar src={currentUser.avatar} size="large"/>
      <Popover placement="leftBottom" content={<a href="https://google.com.sg">Sign Out</a>} trigger="click"><CaretDownOutlined style={{ fontSize: '10px' }}/></Popover>
    </UserContainer>
  </TopBar>
}

export default TopMenuBar;