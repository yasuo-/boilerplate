/** @flow */

import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import autobind from "autobind-decorator";

import { Text } from "../../components/Atom/Text";
import { SignUpContainer } from "./SignUpContainer";
import { SubmitButton } from "../../components/Molecules/SubmitButton";
import { TextField } from "./TextField";

import type { NavigationProps } from "../../components/Types";

export default class SignUpPassword extends Component<NavigationProps<*>> {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
  }

  // @autobind
  next() {
    const { navigation } = this.props;
    this.props.navigation.navigate(navigation, "Home");
  }

  render() {
    const { navigation } = this.props;

    return (
      <SignUpContainer {...{ navigation }}>
        <Text type="header2" style={styles.text} gutterBottom={true}>
          Create a password
        </Text>
        <Text gutterBottom={true} style={styles.text}>
          パスワードには少なくとも1つの記号が含まれ、8文字以上の長さである必要があります。
        </Text>
        <TextField
          label="Password"
          contrast={true}
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={this.next}
        />
        <SubmitButton onPress={this.next} />
      </SignUpContainer>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  text: {
    color: "white"
  }
});
