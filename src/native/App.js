/* @flow */

import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
// import { Font, AppLoading } from "expo";

import APIStore from "../api";
import getTheme from "../../native-base-theme/components";
import common from "../../native-base-theme/variables/commonColor";
import RootStack from "./navigator";

interface AppState {
  ready: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = { AppState: false };
  }

  componentWillMount() {
    this.loadStaticResources();
  }

  async loadStaticResources(): Promise<void> {
    /*await Font.loadAsync({
      "SFProDisplay-Bold": require("../../fonts/SF-Pro-Display-Bold.otf"),
      "SFProDisplay-Semibold": require("../../fonts/SF-Pro-Display-Semibold.otf"),
      "SFProDisplay-Regular": require("../../fonts/SF-Pro-Display-Regular.otf"),
      "SFProDisplay-Light": require("../../fonts/SF-Pro-Display-Light.otf")
    });
    await Images.downloadAsync();*/
    await APIStore.load();
    this.setState({ ready: true });
  }

  render() {
    return (
      <StyleProvider style={getTheme(common)}>
        <RootStack />
      </StyleProvider>
    );
  }
}
