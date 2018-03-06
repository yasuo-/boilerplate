/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions, Animated } from "react-native";
import autobind from "autobind-decorator";
import { Constants } from "expo";
import Swiper from "react-native-swiper";

import APIStore from "../../../api";
import DefaultContainer from "../DefaultScreen"
import { IOSTitleHeaderBack } from "../../components/Organisms/IOSTitleHeaderBack";
import { DetailsContents } from "../../components/Organisms/DetailContents";

import type { ScreenParams } from "../../components/Types";

type DetailViewState = {
  scrollY: Animated.Value,
  loading: boolean
};

export default class Detail extends Component<ScreenParams<{ id: string }>, DetailViewState> {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  async componentWillMount(): Promise<void> {
    const { navigation } = this.props;
    const { id } = navigation.state.params;
    const home = APIStore.home(id);
    const scrollY = new Animated.Value(0);
    this.setState({ scrollY, loading: true });
    await Promise.all(home.pictures.map(picture => Image.prefetch(picture)));
    this.setState({ loading: false });
  }

  // @autobind
  back() {
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const { id } = navigation.state.params;
    const home = APIStore.home(id);
    const { scrollY, loading } = this.state;
    const onScroll = Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY
          }
        }
      }
    ]);
    const threshold = height - 57 - Constants.statusBarHeight;
    const backgroundColor = scrollY.interpolate({
      inputRange: [0, threshold - 5, threshold],
      outputRange: ["transparent", "transparent", "white"]
    });
    const iconStyle = {
      color: scrollY.interpolate({
        inputRange: [0, threshold - 5, threshold],
        outputRange: ["white", "white", Theme.typography.color]
      })
    };

    return (
      <DefaultContainer>
        <IOSTitleHeaderBack
          backgroundColor={backgroundColor}
          iconStyle={...{ iconStyle }}
          onPress={this.back}
        />
        <DetailsContents
          {...this.props}
          {...this.state}
        />
      </DefaultContainer>
    );
  }
}
