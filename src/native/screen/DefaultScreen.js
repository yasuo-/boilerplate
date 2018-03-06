/* @flow */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import type { BaseProps } from "../components/Type";

type DefaultScreenProps = BaseProps & {
  children: React.ChildrenArray<React.Element<*>>
};

export default class DefaultScreen extends Component<DefaultScreenProps> {
  render() {
    return (
      <View style={styles.flex}>
        {children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
