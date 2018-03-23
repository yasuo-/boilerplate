/* @flow */

import React, { Component } from "react";
import { View } from "react-native";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { Font, AppLoading } from "expo";

import Fonts from "./config/fonts/index";
import { withRkTheme } from 'react-native-ui-kitten';
import RootStack from "./navigator";

interface AppState {
  ready: boolean;
}

const cacheFonts = (fonts) => (fonts.map(font => Font.loadAsync(font)))

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = { ready: true };
  }

  componentDidMount() {
    this.loadStaticResources();
  }

  async loadStaticResources(): Promise<void> {
    const fontAssets = cacheFonts(Fonts);
    await Promise.all([...fontAssets]);
    this.setState({ ready: true })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.ready
          ? <RootStack />
          : <AppLoading
            startAsync={this._loadAssetsAsync}
            onFinish={() => this.setState({ ready: true })}
            onError={console.warn}
          />
        }
      </View>
    );
  }
}
