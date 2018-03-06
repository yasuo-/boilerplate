/* @flow */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Theme } from "../../Theme";
import type { BaseProps } from "../components/Type";

type VerticalSectionProps = BaseProps & {
  children: React.ChildrenArray<React.Element<*>>
};

export default class VerticalSection extends Component<VerticalSectionProps> {
  render() {
    return (
      <View style={styles.container}>
        {children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.base
  }
});
