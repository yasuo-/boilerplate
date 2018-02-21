/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import autobind from "autobind-decorator";

import { Theme, Text, Button, Container } from "../../components";
import type { ScreenProps } from "../../components/Types";

export default class Welcome extends Component<ScreenProps<>> {
  @autobind
  signUp() {
    this.props.navigation.navigate("SignUp");
  }

  @autobind
  login() {
    this.props.navigation.navigate("Login");
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
  }
});
