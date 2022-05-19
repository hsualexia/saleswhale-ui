import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'ProximaNova', sans-serif;
    font-size: 12px;
    margin: 0;
    padding: 0;

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #b4b4b4;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: calc(100vw - 80px);
`;

export const ContentStyled = styled.div`
  background-color: #E2E2E2;
  width: 100%;
  height: 100%;
`;