/** @flow */

import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";

import { UpperTextCard } from "../../Molecules/UpperTextCard";
import { Theme } from "../../Theme";

type SavedCardProps = {
  label: string,
  image: number
};

export default class SavedCard extends Component<SavedCardProps> {
  render() {
    const { label, image } = this.props;
    return <UpperTextCard styles={cardStyles} label={label} image={image} />;
  }
}

/**
 * custom styles
 */
const width = Dimensions.get("window").width - Theme.spacing.base * 2;
const cardStyles = StyleSheet.create({
  container: {
    marginBottom: Theme.spacing.base
  },
  image: {
    width,
    height: width / 1.5
  }
});
