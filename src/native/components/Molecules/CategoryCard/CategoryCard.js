/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";

import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";

type CategoryCardProps = {
  label: string,
  image: number
};

export default class CategoryCard extends Component<CategoryCardProps> {
  render() {
    const { label, image, onPress } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <Text type="large" gutterBottom={true} style={styles.text}>
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 121,
    height: 115,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#b3b3b3",
    marginRight: Theme.spacing.small
  },
  image: {
    width: 121,
    height: 68,
    borderRadius: 4
  },
  text: {
    marginTop: Theme.spacing.tiny,
    marginLeft: Theme.spacing.tiny
  }
});
