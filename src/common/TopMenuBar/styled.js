import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  background: #FFFFFF;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-color: #E2E2E2;
  border-bottom-width: 1px;
  font-size: 18px;
`;

export const Container = styled.div`
  display: flex;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  gap: 10px;
`;

export const TextStyled = styled.div`
  margin-left: 25px;
  font-weight: 600;
  font-size: 14px;
  opacity: 0.5;
  color: #1A1919;
`;

export const NarWhalStyled = styled.div`
  display: flex;
  width: 166px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  color: #1A1919;
  opacity: 0.5;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: #E2E2E2;
`;

export const TeamsStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
`;