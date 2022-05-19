import React from 'react';
import { Avatar } from 'antd';

import { activities } from '../../../asset/data';
import { Container, TitleStyled, ListStyled } from './styled';

const Activities = () => {
  const activityFunction = (name, action, target) => {
    switch (action) {
      case 'increased_quota':
        return <><strong>{name}</strong> increased <strong>{target}</strong>&apos;s quota.</>
      case 'added_leads':
        return <><strong>{name}</strong> added new leads to <strong>{target}</strong>.</>
      default:
        return <><strong>{name}</strong> archived the team <strong>{target}</strong>.</>
    }
  }
  return <Container>
    <TitleStyled>Activity</TitleStyled>
    <ListStyled
      itemLayout="horizontal"
      dataSource={activities}
      renderItem={item => (
        <ListStyled.Item>
          <ListStyled.Item.Meta
            key={item.id}
            avatar={<Avatar src={item.person.avatar} />}
            title={activityFunction(item.person.name, item.action, item.target)}
            description={item.created_at || "Some time ago"}
          />
        </ListStyled.Item>
      )}
    />
  </Container>
};

export default Activities;