/** @flow */

import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import CategoryCard from "../../Molecules/CategoryCard";

import { Images } from "../../../../assets/images";
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
        <CategoryCard label="Homes" image={Images.homes} />
        <CategoryCard label="Experiences" image={Images.experiences} />
        <CategoryCard label="Restaurants" image={Images.restaurants} />
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