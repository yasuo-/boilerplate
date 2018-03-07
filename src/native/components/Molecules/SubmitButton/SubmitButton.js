/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { IconButton } from "../IconButton";
import { Theme } from "../../Theme";

interface SubmitButtonProps {
  onPress: () => void
}

/**
 * SubmitButton
 */
export default class SubmitButton extends Component<SubmitButtonProps> {
  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.submit}>
        <IconButton
          name="ios-arrow-forward-outline"
          contrast={true}
          withBackground={true}
          {...{ onPress }}
        />
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  submit: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 50 + Theme.spacing.small
  }
});