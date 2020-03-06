import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import AppContainer from './containers/AppContainer';
import './index.css';
import Container from '@material-ui/core/Container';
import AppBarContainer from './containers/AppBarContainer';
import BottomNavigation from './components/BottomNav';
ReactDOM.render(
  <Root>
    <AppBarContainer />
    <Container maxWidth={false} disableGutters={true}>
      <AppContainer />
    </Container>
    <BottomNavigation />
  </Root>,

  document.getElementById('root')
);
