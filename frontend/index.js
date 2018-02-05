// import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';
import Setup from './setup';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {currentUser: window.currentUser}
    };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);

  window.getState = store.getState;

  const render = Component => {
    ReactDOM.hydrate(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('current-page')
    );
  };

  render(Setup);
  console.log("client");

  if (module.hot) {
    module.hot.accept('./setup', () => { render(Setup); });
    console.log("hot reload");
  }
});
