/** @flow */

import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import autobind from "autobind-decorator";

import { Text } from "../../components/Atom/Text";
import { SignUpContainer } from "./SignUpContainer";
import { SubmitButton } from "../../components/Molecules/SubmitButton";
import { TextField } from "./TextField";

import type { NavigationProps } from "../../components/Types";

export default class SignupName extends Component<NavigationProps<*>> {
  constructor(props) {
    super(props);

    this.setLastName = this.setLastName.bind(this);
    this.goLastName = this.goLastName.bind(this);
    this.next = this.next.bind(this);
  }

  lastName: TextInput;

  // @autobind
  setLastName(input: TextInput) {
    this.lastName = input;
  }

  // @autobind
  goLastName() {
    this.lastName.focus();
  }

  // @autobind
  next() {
    // const { navigation } = this.props;
    // this.props.navigation.navigate(navigation, "SignUpEmail");
    this.props.navigation.navigate("SignUpEmail");
  }

  render() {
    const { navigation } = this.props;

    return (
      <SignUpContainer {...{ navigation }}>
        <Text type="header2" style={styles.header} gutterBottom={true}>
          your name ?
        </Text>
        <TextField
          label="First Name"
          contrast={true}
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={this.goLastName}
        />
        <TextField
          toggleSecureEntry={true}
          label="Last Name"
          contrast={true}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={this.setLastName}
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
  header: {
    color: "white"
  },
  text: {
    color: "white",
    textAlign: "right"
  }
});
