/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, } from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from "autobind-decorator";
import { Facebook } from 'expo';
// data
import { signInWithFacebook } from "../../../redux/actions/authActions";
// const { signInWithFacebook } = authActions
import * as c from "../../../config/constants";
import { permissions } from "../../../config";
import { decrement } from "../../../redux/actions/";

// component
import { Text } from "../../components/Atom/Text";
import { Container } from "../../components/Organisms/Container";
import { Button } from "../../components/Atom/Button";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../../components/Types";

class Welcome extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
    this.skip = this.skip.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.onSignInWithFacebook = this.onSignInWithFacebook.bind(this);
  }

  // @autobind
  signUp() {
    this.props.navigation.navigate("SignUp");
  }

  // @autobind
  login() {
    this.props.navigation.navigate("Login");
  }

  // @autobind
  skip() {
    this.props.navigation.navigate("Home");
  }

  // @autobind
  onSuccess({ exists, user }) {
    if (exists) Actions.Main()
    else Actions.CompleteProfile({ user })
  }

  // @autobind
  onError(error) {
    alert(error.message);
  }

  // @autobind
  async onSignInWithFacebook() {
    const options = { permissions };
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);
    if (type === 'success') {
      this.props.decrement(token)
      console.log(this.props.signInWithFacebook(token))
      this.props.signInWithFacebook(token);
      this.props.navigation.navigate("Home");
    }
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

/**
 * mapDispatchToProps
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signInWithFacebook,
    decrement
  }, dispatch)
)
/**
 * mapStateToProps
 * @param {*} state
 */
const mapStateToProps = state => ({
  authReducer: state.authReducer,
  dataObj: state.count
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);