/** @flow */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  Text,
  Button
} from "react-native";
import { Constants } from "expo";

import DefaultScreen from "../DefaultScreen";
import SectionContainer from "../SectionScreen";
import { IOSTitleHeaderBack } from "../../components/Organisms/IOSTitleHeaderBack";
import { DetailContents } from "../../components/Organisms/DetailContents";

import APIStore from "../../../api";
import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../Types";

export default class Detail extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }

    this.back = this.back.bind(this);
  }

  // @autobind
  back() {
    this.props.navigation.goBack();
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

  render() {
    const { navigation } = this.props;
    const { id } = navigation.state.params;
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

    const { width } = Dimensions.get("window");
    const height = width * 0.67 + Constants.statusBarHeight;

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
      <DefaultScreen>
        <IOSTitleHeaderBack
          backgroundColor={backgroundColor}
          iconStyle={iconStyle}
          onPress={this.back}
        />
        <DetailContents
          id={id}
          scrollY={scrollY}
          loading={loading}
          onScroll={onScroll}
          {...this.props}
        />
      </DefaultScreen>
    );
  }
}
