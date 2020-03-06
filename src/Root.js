import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import audioApp from './reducers';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { audioInitialState } from './reducers/audio';
import { appInitialState } from './reducers/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  audioApp,
  {
    audio: audioInitialState,
    app: appInitialState,
  },
  composeEnhancers(applyMiddleware(promise))
);

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
    },
  },
});

export default class Root extends React.Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <div id='container'>
          <Provider store={store}>{this.props.children}</Provider>
        </div>
      </ThemeProvider>
    );
  }
}
