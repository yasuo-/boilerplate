/** @flow */
import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { List, ListItem, Body } from "native-base";
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen";

import { Text } from "../../components/Text";

import type { ScreenProps } from "../Types";

export default class Inbox extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const threads = APIStore.threads();

    return (
      <HomeContainer withGutter={true}>
        <Text type="header1" gutterBottom={true}>Inbox</Text>
        <Text gutterBottom={true}>You have no unread messages</Text>
        {
          /**
          threads.map(threads => <ThreadItem key={thread.name} {...{ thread, navigation }} />)
        */
        }
      </HomeContainer>
    );
  }
}

