/** @flow */
import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { List, ListItem, Body } from "native-base";
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen";

import { Text } from "../../components/Text";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../Types";

export default class Profile extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.host = this.host.bind(this);
    this.logOut = this.logOut.bind(this);
    this.settings = this.settings.bind(this);
  }

  // @autobind
  host(id: string) {
    this.props.navigation.navigate("Host", { id });
  }

  // @autobind
  settings() {
    this.props.navigation.navigate("Settings");
  }

  // @autobind
  logOut(id: string) {
    this.props.navigation.navigate("Welcome", { id });
  }

  render() {
    return (
      <HomeContainer withGutter={true}>
        <TouchableWithoutFeedback>
          <View style={styles.header}>
            <View>
              <Text type="header1">profile.name</Text>
              <Text>View and Edit Profile</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <List>
          <ListItem onPress={this.host}>
            <Body>
              <Text>ホストになる</Text>
            </Body>
          </ListItem>
          <ListItem onPress={this.settings}>
            <Body>
              <Text>Settings</Text>
            </Body>
          </ListItem>
          <ListItem onPress={this.logOut}>
            <Body>
              <Text>Logout</Text>
            </Body>
          </ListItem>
        </List>
      </HomeContainer>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Theme.spacing.base
  },
  btn: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
