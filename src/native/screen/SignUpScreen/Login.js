/** @flow */

import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import autobind from "autobind-decorator";

import { Text } from "../../components/Atom/Text";
import { SignUpContainer } from "./SignUpContainer";
import { SubmitButton } from "../../components/Molecules/SubmitButton";

import { Theme } from "../../components/Theme";
import type { NavigationProps } from "../../components/Types";

export default class Login extends Component<NavigationProps<*>> {
  constructor(props) {
    super(props);

    this.setPassword = this.setPassword.bind(this);
    this.focusPassword = this.focusPassword.bind(this);
    this.login = this.login.bind(this);
  }

  password: TextInput;

  // @autobind
  setPassword(input: TextInput) {
    this.password = input;
  }

  // @autobind
  focusPassword() {
    this.password.focus();
  }

  // @autobind
  login() {
    const { navigation } = this.props;
    this.props.navigation.navigate(navigation, "Home");
  }

  render() {
    const { navigation } = this.props;
    return (
      <SignUpContainer {...{ navigation }}>
        <Text type="header2" style={styles.header} gutterBottom={true}>
          Login
        </Text>

        <SubmitButton onPress={this.login} />
      </SignUpContainer>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Theme.palette.primary
  },
  header: {
    color: "white"
  },
  text: {
    color: "white",
    textAlign: "right"
  }
});
