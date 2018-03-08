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
    const { onPress } = this.props;
    return (
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <CitiesCard label="Tokyo" image={Images.Tokyo} onPress={onPress} />
        <CitiesCard label="Paris" image={Images.Paris} onPress={onPress} />
        <CitiesCard
          label="San Francisco"
          image={Images.SanFrancisco}
          onPress={onPress}
        />
        <CitiesCard
          label="Cape Town"
          image={Images.CapeTown}
          onPress={onPress}
        />
        <CitiesCard label="London" image={Images.London} onPress={onPress} />
        <CitiesCard
          label="Los Angeles"
          image={Images.LosAngeles}
          onPress={onPress}
        />
        <CitiesCard label="Miami" image={Images.Miami} onPress={onPress} />
        <CitiesCard label="Nairobi" image={Images.Nairobi} onPress={onPress} />
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
