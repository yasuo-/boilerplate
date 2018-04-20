/** @flow */

import React, { Component } from "react";

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen";
import SectionContainer from "../SectionScreen";
import { IOSTitleHeader } from "../../components/Organisms/IOSTitleHeader";
import { Text } from "../../components/Atom/Text";
import ThreadItem from "./ThreadItem";

import type { ScreenProps } from "../../components/Types";

export default class Inbox extends Component<ScreenProps<>> {
  render() {
    const { navigation } = this.props;
    const threads = APIStore.threads();

    return (
      <HomeContainer>
        <IOSTitleHeader title={"Inbox"} />
        <SectionContainer withGutter={true}>
          <Text gutterBottom={true}>You have no messages</Text>
          <Text>Planを作成してください</Text>
        </SectionContainer>
      </HomeContainer>
    );
  }
}
/*
{threads.map(thread => (
            <ThreadItem key={thread.name} {...{ thread, navigation }} />
          ))}
          */
