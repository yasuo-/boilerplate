/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen";

import IOSTitleHeader from "../../components/Organisms/IOSTitleHeader";
import { Text } from "../../components/Atom/Text";
import ThreadItem from "./ThreadItem";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../Types";

export default class Inbox extends Component<ScreenProps<>> {
  render() {
    const { navigation } = this.props;
    const threads = APIStore.threads();

    return (
      <HomeContainer withGutter={true}>
        <IOSTitleHeader title={"Inbox"} />
        <Text gutterBottom={true}>You have no unread messages</Text>
        {threads.map(thread => (
          <ThreadItem key={thread.name} {...{ thread, navigation }} />
        ))}
      </HomeContainer>
    );
  }
}
