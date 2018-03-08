/* @flow */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class DefaultScreen extends Component<> {
  render() {
    const { children } = this.props;
    return <View style={styles.flex}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
