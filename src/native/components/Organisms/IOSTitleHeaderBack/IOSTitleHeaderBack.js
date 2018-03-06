/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";
import autobind from "autobind-decorator";

import IconButton from "../../Molecules/IconButton/IosArrowBackOutline";
import { Theme } from "../../Theme";
import type { NavigatioProps } from "../../Types";

type IOSTitleHeaderBackProps = NavigationBarProps<*> & {
  backgroundColor: string,
  iconStyle: string,
  onPress: () => void
};

export default class IOSTitleHeaderBack extends Component<IOSTitleHeaderBackProps> {
  render() {
    const { backgroundColor, onPress, iconStyle } = this.props;

    return (
      <Animated.View style={[styles.header, { backgroundColor }]}>
        <IconButton name="ios-arrow-back-outline" onPress={onPress} animated={true} {...{ iconStyle }} />
      </Animated.View>
    );
  }
}

/**
 * custom style
 */
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    height: 57 + Constants.statusBarHeight,
    zIndex: 1000,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: Theme.spacing.base,
    justifyContent: "center",
    width
  }
});
