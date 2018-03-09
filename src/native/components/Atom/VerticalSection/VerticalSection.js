/* @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Theme } from "../../Theme";
export default class VerticalSection extends Component<> {
  render() {
    const { children } = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.base
  }
});