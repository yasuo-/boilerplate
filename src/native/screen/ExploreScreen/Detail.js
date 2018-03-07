/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions, Animated, Text, Button } from "react-native";

import HomeContainer from "../HomeScreen";
import SectionContainer from "../SectionScreen";
import { IOSTitleHeader } from "../../components/Organisms/IOSTitleHeader";

import type { ScreenProps } from "../Types";

export default class Detail extends Component<ScreenProps<>> {
  render() {

    return (
      <HomeContainer>
        <IOSTitleHeader title={"Detail"} />
        <SectionContainer withGutter={true}>
          <Text>Detail page</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </SectionContainer>
      </HomeContainer>
    );
  }
}



/*
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions, Animated, Text, Button } from "react-native";
import autobind from "autobind-decorator";
import { Constants } from "expo";
import Swiper from "react-native-swiper";

import APIStore from "../../../api";
import { DefaultContainer } from "../DefaultScreen"
import IconButton from "../../components/Molecules/IconButton/IosArrowBackOutline"
import { IOSTitleHeaderBack } from "../../components/Organisms/IOSTitleHeaderBack";
// import { DetailContents } from "../../components/Organisms/DetailContents";

import { Theme } from "../../components/Theme";
import type { ScreenParams } from "../../components/Types";

type DetailViewState = {
  //  scrollY: Animated.Value,
  //   loading: boolean
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
      <View style={styles.flex}>
        <IOSTitleHeaderBack
          backgroundColor={backgroundColor}
          iconStyle={iconStyle}
          onPress={this.back}
        />
        <Animated.View style={[styles.header, { backgroundColor }]}>
          <IconButton name="ios-arrow-back-outline" onPress={this.back} animated={true} {...{ iconStyle }} />
        </Animated.View>
        <Text>Detail page</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View >
    );
  }
}

/*

<DetailsContents
          {...this.props}
          {...this.state}
        />
        */
       /*
const { width } = Dimensions.get("window");
const height = width * 0.67 + Constants.statusBarHeight;
const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
*/