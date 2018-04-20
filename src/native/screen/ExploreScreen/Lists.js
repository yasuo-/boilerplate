/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";

import SectionContainer from "../SectionScrollScreen";
import { NavigationBar } from "../../components/Organisms/NavigationBar";
import { ListViewContents } from "../../components/Organisms/ListViewContents";
import { HomeCardLarge } from "./HomeCard";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../../components/Types";

export default class Lists extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.Details = this.Details.bind(this);
    this.back = this.back.bind(this);
  }

  // @autobind
  Details(id: string) {
    this.props.navigation.navigate("Detail", { id });
  }

  // @autobind
  back() {
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <NavigationBar title="一覧" onPress={this.back} {...{ navigation }} />
        <SectionContainer withGutter={true}>
          {_.map(APIStore.homesByCities(), (homes, city) => (
            <ListViewContents key={city} contentsTitle={city}>
              {homes.map(home => (
                <HomeCardLarge key={home.id} onPress={this.Details} {...{ home }} />
              ))}
            </ListViewContents>
          ))}
        </SectionContainer>
      </Container>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.spacing.base
  }
});