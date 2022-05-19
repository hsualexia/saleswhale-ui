import styled from 'styled-components';
import { Button, Menu, Row, Input } from 'antd';

export const BannerContainer = styled.div`
  display: flex;
  background: #FFFFFF;
  padding: 28px;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

export const TabContainer = styled(Row)`
  background: #FFFFFF;
  align-items: center;
  padding-right: 90px;

  & .ant-input-affix-wrapper {
    border: none;

    :hover {
      border-color: none;
    }
  }
`;

export const MainContainer = styled(Row)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-left: 30px;
  margin-top: 40px;
`;

export const TitleStyled = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 30px;
  color: #1A1919;
  align-items: center;
  gap: 5px;
`;

export const ButtonStyled = styled(Button)`
  width: 190px;
  background: #40D2BF;
  color: #FFFFFF;
  font-size: 14px;
  border-radius: 4px;
  height: 36px;

  :hover {
    color: #000000;
  }
`;

export const MenuStyled = styled(Menu)`
  padding-left: 45px;
  font-weight: bold;
  font-size: 18px;
  height: 40px;
`;

export const InputStyled = styled(Input)`
  & .ant-input {
    font-size: 16px;
    font-weight: 600;
  }
`;