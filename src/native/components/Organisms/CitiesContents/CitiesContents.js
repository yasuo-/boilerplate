/** @flow */

import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { CitiesCard } from "../../Molecules/CitiesCard";

import Images from "../../../../assets/Images/index";
import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type CitiesContentsProps = BaseProps & {
  label: string,
  image: number
};

export default class CitiesContents extends Component<CitiesContentsProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <CitiesCard label="Cape Town" image={Images.CapeTown} />
        <CitiesCard label="London" image={Images.London} />
        <CitiesCard label="Los Angeles" image={Images.LosAngeles} />
        <CitiesCard label="Miami" image={Images.Miami} />
        <CitiesCard label="Nairobi" image={Images.Nairobi} />
        <CitiesCard label="Paris" image={Images.Paris} />
        <CitiesCard label="San Francisco" image={Images.SanFrancisco} />
        <CitiesCard label="Tokyo" image={Images.Tokyo} />
      </ScrollView>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: Theme.spacing.base,
    marginBottom: Theme.spacing.base
  },
  container: {
    paddingRight: Theme.spacing.base
  }
});
