/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Spinner } from "native-base";

import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

export default class LoadingIndicator extends Component<MapViewProps> {
  render() {
    const { style } = this.props;
    return (
      <View style={[style, styles.container]}>
        <Spinner color={Theme.palette.primary} />
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
