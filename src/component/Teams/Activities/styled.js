import styled from 'styled-components';
import { List } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
`;

export const TitleStyled = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #EFEFEF;
`;

export const ListStyled = styled(List)`
  padding: 30px;
  width: 100%;
  height: 100%;
`;