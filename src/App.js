import React from 'react';
import {Provider} from 'react-redux';
import Routes from './router';
import getStore from "./store/store";

const store = getStore();

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Routes/>
        </Provider>
    );
  }
}

export default App;
