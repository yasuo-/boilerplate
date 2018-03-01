/** @flow */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button as NBButton, Text } from "native-base";

import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type ButtonProps = BaseProps & {
  label: string,
  primary?: boolean,
  full?: boolean,
  contrast?: boolean,
  onPress: () => void
};

export default class Button extends Component<ButtonProps> {
  render() {
    const { label, primary, full, contrast, onPress, style } = this.props;
    const rounded = contrast;
    const transparent = contrast && !primary;
    const bordered = contrast && !primary;
    const baseStyle = [
      style,
      styles.base,
      contrast && primary
        ? styles.primaryContrast
        : contrast ? styles.contrast : {}
    ];
    const textStyle = contrast && primary ? styles.primaryContrastText : {};

    return (
      <NBButton
        {...{
          full,
          primary,
          rounded,
          transparent,
          bordered,
          style: baseStyle,
          onPress
        }}
      >
        <Text style={textStyle}>{label}</Text>
      </NBButton>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  base: {
    marginBottom: Theme.spacing.base
  },
  contrast: {
    borderColor: "white"
  },
  primaryContrast: {
    backgroundColor: "white"
  },
  primaryContrastText: {
    color: Theme.palette.primary
  }
});
