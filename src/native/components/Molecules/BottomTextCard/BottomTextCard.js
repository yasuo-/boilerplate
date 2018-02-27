/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";

type CardProps = {
  label: string,
  image: number
};

/**
 * BottomTextCard
 * cardの下にtextがある汎用component
 * props {
 *  label: {String}
 *  image: {number}
 *  style: {object}
 * }
 */
export default class BottomTextCard extends Component<CardProps> {
  render() {
    const { label, image, styles } = this.props;

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
