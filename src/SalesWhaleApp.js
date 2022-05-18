import React, { Suspense } from 'react';
import './asset/style/globalStyle.less';

import TopMenuBar from './common/TopMenuBar';
import LeftMenuBar from './common/LeftMenuBar';
import { GlobalStyle, Container, MainPanel, ContentStyled } from './asset/style/globalStyle';

const SalesWhaleApp = () => {
  return <Suspense>
    <GlobalStyle />
    <Container>
      <LeftMenuBar />
      <MainPanel>
        <TopMenuBar/>
        <ContentStyled>
          <h1>ni hao</h1>
        </ContentStyled>
      </MainPanel>
    </Container>
  </Suspense>
};

export default SalesWhaleApp;