import styled from 'styled-components';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100vh;
  background: #042235;
  justify-content: space-between;
  align-items: center;
`;

export const LinkStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px 0px;
  ${props => props.isActive ? 'background: #2995DA;' : null}

  :hover {
    cursor: pointer;
    background: #2995DA;
  }
`;

export const LogoStyled = styled.div`
  margin: 20px;
`;
