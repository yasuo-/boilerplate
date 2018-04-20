/** @flow */

import React, { Component } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import autobind from "autobind-decorator";
import { Constants } from "expo";


import { IconButton } from "../../Molecules/IconButton";
import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";

import type { NavigatioProps } from "../../Types";

type NavigationBarProps = NavigationBarProps<*> & {
  title: string,
  onPress: () => void
};

export default class NavigationBar extends Component<NavigationBarProps> {
  render() {
    const { title, onPress } = this.props;

    return (
      <View style={styles.header}>
        <IconButton name="ios-arrow-back-outline" onPress={onPress} style={styles.headerSide} />
        <Text type="large">{title}</Text>
        <View style={styles.headerSide} />
      </View>
    );
  }
}

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
