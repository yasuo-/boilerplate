/** @flow */
import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { List, ListItem, Body } from "native-base";
import { connect } from 'react-redux';
import autobind from "autobind-decorator";
import * as _ from "lodash";

import * as actions from "../../../redux/actions/authActions";
const { signOut } = actions;

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen.js";
import Text from "../../components/Atom/Text/Text";
import { Avatar } from "../../components/Atom/Avatar"
import { Theme } from "../../components";
import Steps from "./Steps";

import type { ScreenProps } from "../../components/Types";

class Profile extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.host = this.host.bind(this);
    this.lancer = this.lancer.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
    this.settings = this.settings.bind(this);
  }

  // @autobind
  host(id: string) {
    alert('ホストになりますか？')
    // this.props.navigation.navigate("Host", { id });
  }

  lancer(id: string) {
    alert('Lancerになりますか？')
  }

  // @autobind
  settings() {
    this.props.navigation.navigate("Settings");
  }

  onSuccess() {
    Actions.reset("Auth")
  }

  onError(error) {
    Alert.alert('Oops!', error.message);
  }

  // @autobind
  onLogOut(id: string) {
    // this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    this.props.navigation.navigate("Welcome", { id });
  }

  render() {
    const profile = APIStore.profile();
    return (
      <HomeContainer withGutter={true}>
        <TouchableWithoutFeedback>
          <View style={styles.header}>
            <View>
              <Text type="header1">{profile.name}</Text>
              <Text>View and Edit Profile</Text>
            </View>
            <Avatar uri={profile.picture} />
          </View>
        </TouchableWithoutFeedback>
        <Steps stepsLeft={1} />
        <List>
          <ListItem style={styles.listItem} onPress={this.host}>
            <Body>
              <Text>ホストになる</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listItem} onPress={this.lancer}>
            <Body>
              <Text>ランサーになる</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listItem} onPress={this.settings}>
            <Body>
              <Text>Settings</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listItem} onPress={this.onLogOut}>
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
    marginTop: Theme.spacing.base,
    marginBottom: Theme.spacing.base
  },
  listItem: {
    height: 50
  },
  btn: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default connect(null, { signOut })(Profile);