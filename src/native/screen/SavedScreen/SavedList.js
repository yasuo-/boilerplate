/** @flow */

import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import HomeCard from "../ExploreScreen/HomeCard";
import Text from "../../components/Atom/Text";
import Container from "../../components/Organisms/Container";
import IconButton from "../../components/Molecules/IconButton";
import Button from "../../components/Atom/Button";

import APIStore from "../../../api";
import type { ScreenProps } from "../Types";
import type { Home } from "../../../../model/model";

type SavedState = {
  homes: Home[]
};

export default class SavedList extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.explore = this.explore.bind(this);
    this.homeDetails = this.homeDetails.bind(this);
  }

  listener: (Home[]) => void;

  // @autobind
  back() {
    this.props.navigation.goBack();
  }

  // @autobind
  explore() {
    this.props.navigation.navigate("Explore");
  }

  // @autobind
  homeDetails(id: string) {
    this.props.navigation.navigate("HomeOverview", { id });
  }

  componentWillMount() {
    this.listener = (homes: Home[]) => {
      this.setState({ homes });
    };
    APIStore.savedHomes(this.listener);
  }

  componentWillUnmount() {
    APIStore.dispose(this.listener);
  }

  render() {
    const { homes } = this.state;

    return (
      <Container withGutter={true}>
        <ScrollView>
          <IconButton name="ios-arrow-back-outline" onPress={this.back} />
          <Text type="header1" gutterBottom={true}>
            Saved Homes
          </Text>
          {homes.length === 0 && (
            <Text type="header2" gutterBottom={true}>
              Nothing saved yet
            </Text>
          )}
          {homes.length > 0 && (
            <View>
              <Text type="header2" gutterBottom={true}>
                You have saved the following homes
              </Text>
              {homes.map(home => (
                <HomeCard
                  key={home.id}
                  onPress={this.homeDetails}
                  {...{ home }}
                />
              ))}
            </View>
          )}
          <Text gutterBottom={true}>
            {`When you see something you like, tap on the heart to save it.
If you're planning a trip with others, invite them so they can save and vote on their favorites.`}
          </Text>
          <Button onPress={this.explore} label="Start exploring" />
        </ScrollView>
      </Container>
    );
  }
}
