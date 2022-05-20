import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './asset/style/globalStyle.less';

import { ROUTES } from './routes';
import { GlobalStyle, Container, MainPanel, ContentStyled } from './asset/style/globalStyle';

const TopMenuBar = lazy(() => import('./common/TopMenuBar'))
const LeftMenuBar = lazy(() => import('./common/LeftMenuBar'))

const Home = lazy(() => import('./component/Home'))
const Teams = lazy(() => import('./component/Teams'))
const PlaceHolder = lazy(() => import('./component/PlaceHolder'))

const SalesWhaleApp = () => {
  return <Suspense>
    <GlobalStyle />
    <Container>
      <LeftMenuBar />
      <MainPanel>
        <TopMenuBar/>
        <ContentStyled>
          <Routes>
            <Route path={ROUTES.BASE} element={<Home/>}/>
            <Route path={ROUTES.TEAMS} element={<Teams />}/>
            <Route path={ROUTES.CAMPAIGN} element={<PlaceHolder />}/>
            <Route path={ROUTES.CONTACTS} element={<PlaceHolder />}/>
            <Route path={ROUTES.REPORTS} element={<PlaceHolder />}/>
            <Route path={ROUTES.HELP} element={<PlaceHolder />}/>
          </Routes>
        </ContentStyled>
      </MainPanel>
    </Container>
  </Suspense>
};

export default SalesWhaleApp;