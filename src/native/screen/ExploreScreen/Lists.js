/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions, Animated, Text, Button } from "react-native";

import HomeContainer from "../HomeScreen";
import SectionContainer from "../SectionScreen";
import { IOSTitleHeader } from "../../components/Organisms/IOSTitleHeader";

import type { ScreenProps } from "../Types";

export default class Lists extends Component<ScreenProps<>> {
  render() {

    return (
      <HomeContainer>
        <IOSTitleHeader title={"list"} />
        <SectionContainer withGutter={true}>
          <Text>list page</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </SectionContainer>
      </HomeContainer>
    );
  }
}
