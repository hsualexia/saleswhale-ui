import styled from 'styled-components';
import { Menu } from 'antd';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100vh;
  background: #042235;
  justify-content: space-between;
`;

export const MenuStyled = styled(Menu)`
  &.ant-menu.ant-menu-dark {
    background: #042235;
  }

  & .ant-menu-item {
    margin: 30px 0px;
  }
`;

export const HelpIconStyled = styled.div`
  padding: 20px 24px;
`;