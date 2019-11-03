import React, { Component } from "react";
import { Provider } from "react-redux";
import AppContainer from './src/navigation';
import store from "./src/store";

export default class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
