import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    font-weight: 400;
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
  margin-left: 80px;
  width: 100%;
  min-height: 100vh;
`;

export const ContentStyled = styled.div`
  background-color: #F1F4F8;
  width: 100%;
  height: 100%;
`;