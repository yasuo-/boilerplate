/** @flow */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground
} from "react-native";

import { Text } from "../../Atom/Text";
import { IconButtonSave } from "../../Molecules/IconButton";
import { Theme } from "../../Theme";

import type { Home } from "../../../../model/model";

type HomeCardProps = {
  home: Home,
  saved: boolean
  onPress: string => void
};


export default class HomeCardComponent extends Component<HomeCardProps> {

  render() {
    const { home, saved onPress } = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: home.pictures[0] }}
          style={styles.image}
        >
          <IconButtonSave
            name={saved ? "ios-heart" : "md-heart-outline"}
            contrast={true}
            onPress={onPress}
            style={styles.heartBtn}
          />
        </ImageBackground>
        <Text type="micro" gutterBottom={true}>
          {`${home.category1.toUpperCase()} - ${home.category2.toUpperCase()}`}
        </Text>
        <Text type="large" numberOfLines={2} gutterBottom={true}>
          {home.title}
        </Text>
        <Text type="small" gutterBottom={true}>
          {`${home.price.amount} ${home.price.currency} per person`}
        </Text>
      </View>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  container: {
    width: 158,
    marginRight: Theme.spacing.small
  },
  image: {
    width: 158,
    height: 103,
    borderRadius: 2,
    marginBottom: Theme.spacing.small,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  heartBtn: {
    justifyContent: "center",
    alignItems: "center"
  }
});
