/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen";

import { IOSTitleHeader } from "../../components/Organisms/IOSTitleHeader";
import { CategoriesContents } from "../../components/Organisms/CategoriesContents";
import { CitiesContents } from "../../components/Organisms/CitiesContents";
import { HomeContents } from "../../components/Organisms/HomeContents";
import { HomeCard } from "./HomeCard";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../Types";

export default class Explore extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.homeDetails = this.homeDetails.bind(this);
  }

  // @autobind
  homeDetails(id: string) {
    this.props.navigation.navigate("Detail", { id });
  }

  render() {
    return (
      <HomeContainer>
        <IOSTitleHeader title={"Explore"} />
        <CategoriesContents />
        <CitiesContents />
        {_.map(APIStore.homesByCities(), (homes, city) => (
          <HomeContents
            city={city}
            homes={homes}
            homeDetails={this.homeDetails}
          >
            {homes.map(home => (
              <HomeCard
                key={home.id}
                onPress={this.homeDetails}
                {...{ home }}
              />
            ))}
          </HomeContents>
        ))}
      </HomeContainer>
    );
  }
}
