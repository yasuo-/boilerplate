/** @flow */

import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import autobind from "autobind-decorator";

import { Text } from "../../components/Atom/Text";
import { SignUpContainer } from "./SignUpContainer";
import { SubmitButton } from "../../components/Molecules/SubmitButton";
import { TextField } from "./TextField";

import type { NavigationProps } from "../../components/Types";

export default class Login extends Component<NavigationProps<*>> {
  constructor(props) {
    super(props);

    this.setPassword = this.setPassword.bind(this);
    this.goPassword = this.goPassword.bind(this);
    this.login = this.login.bind(this);
  }

  password: TextInput;

  // @autobind
  setPassword(input: TextInput) {
    this.password = input;
  }

  // @autobind
  goPassword() {
    this.password.focus();
  }

  // @autobind
  login() {
    // const { navigation } = this.props;
    // this.props.navigation.navigate(navigation, "Home");
    this.props.navigation.navigate("Home");
  }

  render() {
    const { navigation } = this.props;
    return (
      <SignUpContainer {...{ navigation }}>
        <Text type="header2" style={styles.header} gutterBottom={true}>
          Login
        </Text>
        <TextField
          label="email"
          keyboardType="email-address"
          contrast={true}
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={this.goPassword}
        />
        <TextField
          toggleSecureEntry={true}
          label="password"
          contrast={true}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={this.setPassword}
          onSubmitEditing={this.login}
        />
        <SubmitButton onPress={this.login} />
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
