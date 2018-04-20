/** @flow */

import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type ListViewContentsProps = BaseProps & {
  contentsTitle: string,
  children: React.ChildrenArray<React.Element<*>>
};

export default class ListViewContents extends Component<ListViewContentsProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { key, contentsTitle, children } = this.props;

    return (
      <View key={`${key}`}>
        <View
          style={styles.flex}
          contentContainerStyle={styles.container}
        >
          {children}
        </View>
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginBottom: Theme.spacing.base
  },
  container: {
    paddingRight: Theme.spacing.base
  }
});
