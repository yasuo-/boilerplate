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
 * UpperTextCard
 * cardの上にtextがある汎用component
 * props {
 *  label: {String}
 *  image: {number}
 *  style: {object}
 * }
 */
export default class UpperTextCard extends Component<CardProps> {
  render() {
    const { label, image, styles } = this.props;

    return (
      <View style={styles.container}>
        <Text type="header2" gutterBottom={true}>
          {label}
        </Text>
        <Image source={image} style={styles.image} />
      </View>
    );
  }
}
