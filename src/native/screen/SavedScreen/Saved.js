/** @flow */

import React, { Component } from "react";

import HomeContainer from "../HomeScreen";
import SectionContainer from "../SectionScreen";
import { IOSTitleHeader } from "../../components/Organisms/IOSTitleHeader";
import { SavedCard } from "./SavedCard";

import Images from "../../../assets/images/index";
import type { ScreenProps } from "../Types";

export default class Saved extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.savedList = this.savedList.bind(this);
  }

  // @autobind
  savedList() {
    alert('SavedList')
    this.props.navigation.navigate("SavedList");
  }

  render() {
    const { navigation } = this.props;

    return (
      <HomeContainer>
        <IOSTitleHeader title={"Saved"} />
        <SectionContainer withGutter={true}>
          <SavedCard
            label="Salon"
            image={Images.homes}
            onPress={this.savedList}
            {...{ navigation }}
          />
          <SavedCard
            label="Nail"
            image={Images.experiences}
            onPress={this.savedList}
            {...{ navigation }}
          />
          <SavedCard
            label="Restaurants"
            image={Images.restaurants}
            onPress={this.savedList}
            {...{ navigation }}
          />
        </SectionContainer>
      </HomeContainer>
    );
  }
}
