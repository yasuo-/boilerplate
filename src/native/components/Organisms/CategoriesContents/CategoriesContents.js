/** @flow */

import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { CategoryCard } from "../../Molecules/CategoryCard";

import Images from "../../../../assets/images/index";
import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type CategoriesContentsProps = BaseProps & {
  label: string,
  image: number
};

export default class CategoriesContents extends Component<
  CategoriesContentsProps
  > {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPress } = this.props;
    return (
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <CategoryCard label="Homes" image={Images.homes} onPress={onPress} />
        <CategoryCard
          label="Experiences"
          image={Images.experiences}
          onPress={onPress}
        />
        <CategoryCard
          label="Restaurants"
          image={Images.restaurants}
          onPress={onPress}
        />
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
