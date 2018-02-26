/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen";

import IOSTitleHeader from "../../components/Organisms/IOSTitleHeader";
import CategoriesContents from "../../components/Organisms/CategoriesContents";
import CitiesContents from "../../components/Organisms/CitiesContents";
import HomeContents from "../../components/Organisms/HomeContents";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../Types";

export default class Explore extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.homeDetails = this.homeDetails.bind(this);
  }

  // @autobind
  homeDetails(id: string) {
    this.props.navigation.navigate("HomeOverview", { id });
  }

  render() {
    return (
      <HomeContainer>
        <IOSTitleHeader title={"Explore"} />
        <CategoriesContents />
        {_.map(APIStore.homesByCities(), (homes, city) => (
          <HomeContents
            city={city}
            homes={homes}
            homeDetails={this.homeDetails}
          />
        ))}
        <CitiesContents />
      </HomeContainer>
    );
  }
}
