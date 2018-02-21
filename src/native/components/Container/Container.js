/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Constants } from "expo";

import { Theme } from "../Theme";
import type { BaseProps } from "../Types";

type ContainerProps = BaseProps & {
  children: React.ChildrenArray<React.Element<*>>,
  withGutter?: boolean
};

export default class Container extends Component<ContainerProps> {
  render() {
    const { children, withGutter, style } = this.props;
    const containerStyle = [style, styles.base];

    if (withGutter) containerStyle.push(styles.withGutter);

    return <View style={containerStyle}>{children}</View>;
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  withGutter: {
    paddingLeft: Theme.spacing.base,
    paddingRight: Theme.spacing.base,
    paddingBottom: Theme.spacing.base
  }
});
