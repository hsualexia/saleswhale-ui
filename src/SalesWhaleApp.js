import React, { Suspense } from 'react';
import './asset/style/globalStyle.less';
import LeftMenuBar from './common/LeftMenuBar';
import { GlobalStyle, Container, ContentStyled } from './asset/style/globalStyle';

const SalesWhaleApp = () => {
  return <Suspense>
    <GlobalStyle />
    <Container>
      <LeftMenuBar />
      <ContentStyled>
        <h1>ni hao</h1>
      </ContentStyled>
    </Container>
  </Suspense>
};

export default SalesWhaleApp;