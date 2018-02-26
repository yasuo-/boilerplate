/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";

type CitiesCardProps = {
  label: string,
  image: number
};

export default class CitiesCard extends Component<CitiesCardProps> {
  render() {
    const { label, image } = this.props;

    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text type="large" gutterBottom={true} style={styles.text}>
          {label}
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
    marginRight: Theme.spacing.small
  },
  image: {
    width: 121,
    height: 121 * 1.67
  },
  text: {
    marginTop: Theme.spacing.tiny,
    marginLeft: Theme.spacing.tiny
  }
});
