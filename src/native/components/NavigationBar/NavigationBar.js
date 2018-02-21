/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import autobind from "autobind-decorator";

import IconButton from "../IconButton/IosArrowBackOutline";
import Text from "../Text";
import { Theme } from "../Theme";
import type { NavigatioProps } from "../Types";

type NavigationBarProps = NavigationBarProps<*> & {
  title: string
};

export default class NavigationBar extends Component<NavigationBarProps> {
  @autobind
  back() {
    this.props.navigation.goBack();
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.header}>
        <IconButton
          name="ios-arrow-back-outline"
          onPress={this.back}
          style={styles.headerSide}
        />
        <Text type="large">{title}</Text>
        <View style={styles.headerSide} />
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  header: {
    height: 57,
    borderColor: Theme.palette.lightGray,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerSide: {
    marginLeft: Theme.spacing.base,
    marginRight: Theme.spacing.base,
    width: 50
  }
});
