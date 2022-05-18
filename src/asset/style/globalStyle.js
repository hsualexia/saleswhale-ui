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
`;

export const ContentStyled = styled.div`
  background-color: #E5E5E5;
  width: 100%;
  min-height: 100vh;
`;