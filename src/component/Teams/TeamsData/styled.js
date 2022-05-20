import styled from 'styled-components';
import { Row, Button } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
`;

export const CardRow = styled(Row)`
  padding: 20px;

  & .ant-card-meta-description {
    font-size: 14px;
    color: #565656;
  }

  & .ant-card-bordered {
    border: 1px solid #E4E7EC;
    border-radius: 4px;
  }

  & .ant-card-actions {
    border-top: 1px solid #E4E7EC;
  }

  & .ant-card-actions > li {
    border-right: none;
  }
`;

export const CardTitleStyled = styled(Row)`
  margin-top: -5px;
  font-weight: 600;
  justify-content: space-between;
  color: #444444;
  font-size: 16px;
  align-items: center;
`;

export const SubTitleStyled = styled(Row)`
  margin-top: -5px;
  font-size: 13px;
  color: #565656;
  opacity: 0.5;
`;

export const IconStyled = styled(Button)`
  :hover {
    border: none;
    color: transparent;
  }

  :active {
    border-color: none;
    color: transparent;
  }

  &.ant-btn-background-ghost:focus {
    color: transparent;
    border-color: transparent;
  }
`;

export const ShowingStyled = styled.div`
  font-size: 14px;
  color: #7F7F7F;
`;

export const TitleStyled = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const TitleRow = styled(Row)`
  border-bottom: 1px solid #EFEFEF;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 30px;
`;