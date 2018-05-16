import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/createStore';

import Home from '../Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>  
    );
  }
}

export default App;
