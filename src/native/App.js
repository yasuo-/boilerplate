/* @flow */

import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { Font, AppLoading } from "expo";

import APIStore from "../api";
import Images from "../assets/images/index";
import Fonts from "../assets/fonts/index";
import getTheme from "../../native-base-theme/components";
import common from "../../native-base-theme/variables/commonColor";
import RootStack from "./navigator";

interface AppState {
  ready: boolean;
}

const cacheFonts = (fonts) => (fonts.map(font => Font.loadAsync(font)))

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount() {
    this.loadStaticResources();
  }

  async loadStaticResources(): Promise<void> {
    const fontAssets = cacheFonts(Fonts);
    await Promise.all([...fontAssets]);
    await Images.downloadAsync();
    await APIStore.load();
    // this.setState({ ready: true });
  }

  render() {
    return (
      <StyleProvider style={getTheme(common)}>
        {this.state.ready
          ? <RootStack />
          : <AppLoading
            startAsync={this._loadAssetsAsync}
            onFinish={() => this.setState({ ready: true })}
            onError={console.warn}
          />
        }
      </StyleProvider>
    );
  }
}
