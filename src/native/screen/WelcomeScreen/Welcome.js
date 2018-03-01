/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import autobind from "autobind-decorator";

import { Text } from "../../components/Atom/Text";
import { Container } from "../../components/Organisms/Container";
import { Button } from "../../components/Atom/Button";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../../components/Types";

export default class Welcome extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
    this.skip = this.skip.bind(this);
  }

  // @autobind
  signUp() {
    this.props.navigation.navigate("SignUp");
  }

  // @autobind
  login() {
    this.props.navigation.navigate("Login");
  }

  skip() {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <Container withGutter={true} style={styles.container}>
        <Text type="header2" style={styles.header} gutterBottom={true}>
          Welcome to App
        </Text>
        <Button
          label="Login"
          full={true}
          contrast={true}
          primary={true}
          onPress={this.login}
        />
        <Button
          label="Sign Up"
          full={true}
          contrast={true}
          onPress={this.signUp}
        />
        <TouchableOpacity onPress={this.skip} underlayColor="white">
          <Text type="header4" style={styles.text} gutterBottom={true}>
            skip
          </Text>
        </TouchableOpacity>
      </Container>
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
