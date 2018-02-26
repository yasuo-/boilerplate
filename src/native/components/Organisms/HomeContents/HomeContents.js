/** @flow */

import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import HomeCard from "../../../containers/Molecules/HomeCard";

import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type HomeContentsProps = BaseProps & {
  city: string,
  homes: any
};

export default class HomeContents extends Component<HomeContentsProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { city, homes, homeDetails } = this.props;

    return (
      <View key={city}>
        <Text type="header2" gutterBottom={true} style={styles.text}>
          {city}
        </Text>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          {homes.map(home => (
            <HomeCard key={home.id} onPress={homeDetails} {...{ home }} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  text: {
    paddingLeft: Theme.spacing.base
  },
  scrollView: {
    paddingHorizontal: Theme.spacing.base,
    marginBottom: Theme.spacing.base
  },
  container: {
    paddingRight: Theme.spacing.base
  }
});
