import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Avatar} from 'antd';

import { teams } from '../../../asset/data';
import { LeadsIconSmall, CampaignIconSmall, StarIcon, StarActiveIcon } from '../../../asset/img';
import { Container, CardRow, TitleRow, TitleStyled, CardTitleStyled, SubTitleStyled, IconStyled, ShowingStyled } from './styled';

const TeamsData = ({filterData}) => {
  const { Meta } = Card
  const fav = []
  const arc = []
  teams.map(item => {
    if (item.is_favorited) {
      fav.push(item)
    } else if (item.is_archived) {
      arc.push(item)
    }
    return null
  })

  const filterFunction = option => {
    if (option === 'favourites') return fav
    if (option === 'archived') return arc
    return teams
  }

  const filterTitle = option => {
    if (option === 'favourites') return 'Favorite Teams'
    if (option === 'archived') return 'Archived Teams'
    return 'All Teams'
  }

  const counter = option => {
    if (option === 'favourites') return fav.length
    if (option === 'archived') return arc.length
    return teams.length
  }

  return <Container>
    <TitleRow justify="space-between">
      <Col><TitleStyled>{filterTitle(filterData)}</TitleStyled></Col>
      <Col>
        <ShowingStyled>
          Showing {counter(filterData)} out of {counter(filterData)} teams
        </ShowingStyled>
      </Col>
    </TitleRow>
    <CardRow gutter={[20, 20]}>
      {filterFunction(filterData).map(item => (
        <Col key={item.id} span={8}>
          <Card bordered={true} actions={[
            <><CampaignIconSmall /> {item.campaigns_count} Campaigns</>,
            <><LeadsIconSmall /> {item.leads_count} Leads</>
          ]}>
            <Meta
              avatar={<Avatar shape="square" src={item.image}/>} title={
                <>
                  <CardTitleStyled>
                    {item.name}
                    <IconStyled ghost icon={item.is_favorited ? <StarActiveIcon/> : <StarIcon/>}/>
                  </CardTitleStyled>
                  <SubTitleStyled>
                    {item.created_at ? 'Created on' : 'Archived'} {item.created_at}
                  </SubTitleStyled>
                </>
              }
              description={`${item.description.substring(0, 50)}...`}/>
          </Card>
        </Col>
      ))}
    </CardRow>
  </Container>
};

TeamsData.propTypes = {
  filterData: PropTypes.string.isRequired
}

export default TeamsData;