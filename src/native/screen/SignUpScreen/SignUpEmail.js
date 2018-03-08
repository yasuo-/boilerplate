/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import autobind from "autobind-decorator";

import { Text } from "../../components/Atom/Text";
import { SignUpContainer } from "./SignUpContainer";
import { Switch } from "../../containers/Switch";
import { SubmitButton } from "../../components/Molecules/SubmitButton";
import { TextField } from "./TextField";

import { Theme } from "../../components/Theme";
import type { NavigationProps } from "../../components/Types";

export default class SignUpEmail extends Component<NavigationProps<*>> {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
  }

  // @autobind
  next() {
    // const { navigation } = this.props;
    // this.props.navigation.navigate(navigation, "SignUpPassword");
    this.props.navigation.navigate("SignUpPassword");
  }

  render() {
    const { navigation } = this.props;

    return (
      <SignUpContainer {...{ navigation }}>
        <Text type="header2" style={styles.text} gutterBottom={true}>
          your email ?
        </Text>
        <TextField
          label="emial"
          keybordType="email-address"
          contrast={true}
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={this.next}
        />
        <View style={styles.row}>
          <Text style={styles.text}>
            私はパートナーからのマーケティングとコミュニケーションを受けます。
          </Text>
          <Switch />
        </View>
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
    flexWrap: "wrap",
    flex: 1,
    color: "white"
  },
  row: {
    flexDirection: "row",
    marginBottom: Theme.spacing.small
  }
});
