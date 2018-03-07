/** @flow */

import React, { Component } from "react";

import HomeContainer from "../HomeScreen";
import SectionContainer from "../SectionScreen";
import { IOSTitleHeader } from "../../components/Organisms/IOSTitleHeader";
import { SavedCard } from "./SavedCard";

import Images from "../../../assets/Images/index";
import type { ScreenProps } from "../Types";

export default class Saved extends Component<ScreenProps<>> {
  render() {
    const { navigation } = this.props;

    return (
      <HomeContainer>
        <IOSTitleHeader title={"Saved"} />
        <SectionContainer withGutter={true}>
          <SavedCard label="Homes" image={Images.homes} {...{ navigation }} />
          <SavedCard
            label="Experiences"
            image={Images.experiences}
            {...{ navigation }}
          />
          <SavedCard
            label="Restaurants"
            image={Images.restaurants}
            {...{ navigation }}
          />
        </SectionContainer>
      </HomeContainer>
    );
  }
}
