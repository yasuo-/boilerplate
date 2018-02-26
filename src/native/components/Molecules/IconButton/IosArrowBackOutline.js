/** @flow */

import React, { Component } from "react";
import { StyleSheet, Animated } from "react-native";
import { Button } from "native-base";
import { Ionicons as Icon } from "@expo/vector-icons";

import { Theme } from "../Theme";
import type { BaseProps } from "../Types";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type IconButtonProps = BaseProps & {
  name: string,
  contrast?: boolean,
  onPress: () => void,
  withBackground?: boolean,
  iconStyle?: StyleObj,
  animated?: boolean
};

/**
 * AnimatedIcon
 */
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class IosArrowBackOutline extends Component<IconButtonProps> {
  render() {
    const { name, onPress, withBackground, iconStyle, animated } = this.props;
    const IconComponent = animated ? AnimatedIcon : Icon;
    const btnStyle = [style, styles.btnBase];

    if (withBackground) btnStyle.push(styles.btnWithBackground);

    return (
      <Button {...{ onPress }} style={btnStyle} transparent={true}>
        <IconComponent
          {...{ name }}
          size={25}
          color={
            withBackground
              ? Theme.palette.primary
              : contrast ? "white" : Theme.typography.color
          }
          style={iconStyle}
        />
      </Button>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  btnBase: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: 50,
    width: 50,
    borderRadius: 25
  },
  btnWithBackground: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
