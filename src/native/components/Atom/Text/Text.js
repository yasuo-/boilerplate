/** @flow */

import React, { Component } from "react";
import { Text as RNText } from "react-native";

import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type TypographyProps = BaseProps & {
  type:
    | "header1"
    | "header2"
    | "header3"
    | "large"
    | "regular"
    | "small"
    | "micro",
  numberOfLines?: number,
  gutterBottom?: boolean,
  children: string
};

export default class Text extends Component<TypographyProps> {
  render() {
    const { type, style, numberOfLines, gutterBottom, children } = this.props;
    const defaultStyle = [Theme.typography[type]];
    const isNavigationBar = type.startsWith("header");

    defaultStyle.push({
      color: Theme.typography.color,
      marginBottom: gutterBottom
        ? isNavigationBar ? Theme.spacing.base : Theme.spacing.small
        : 0
    });

    defaultStyle.push(style);

    return (
      <RNText style={defaultStyle} {...{ numberOfLines }}>
        {children}
      </RNText>
    );
  }
}

/**
 * defaultProps
 */
Text.defaultProps = {
  type: "regular"
};
