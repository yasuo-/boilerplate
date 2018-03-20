/** @flow */

import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type VerticalContentsProps = BaseProps & {
  contentsTitle: string,
  children: React.ChildrenArray<React.Element<*>>
};

export default class VerticalContents extends Component<VerticalContentsProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { key, contentsTitle, children } = this.props;

    return (
      <View key={`${key}`}>
        <Text type="header2" gutterBottom={true} style={styles.text}>
          {contentsTitle}
        </Text>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  text: {
    paddingLeft: Theme.spacing.base
  },
  scrollView: {
    paddingHorizontal: Theme.spacing.base,
    marginBottom: Theme.spacing.base
  },
  container: {
    paddingRight: Theme.spacing.base
  }
});
