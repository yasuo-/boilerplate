/** @flow */
import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";
import { HomeContainer } from "../HomeScreen";

import { Text } from "../../components/Text";

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
        <Text type="header1" gutterBottom={true} style={styles.text}>
          Explore
        </Text>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
        </ScrollView>
        {_.map(APIStore.homesByCities(), (homes, city) => (
          <View key={city}>
            <Text type="header2" gutterBottom={true} style={styles.text}>
              {city}
            </Text>
            <ScrollView
              horizontal={true}
              style={styles.scrollView}
              contentContainerStyle={styles.container}
            >
              <Text type="header2" gutterBottom={true} style={styles.text}>
                {city}
              </Text>
            </ScrollView>
          </View>
        ))}
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
          <Text type="header2" gutterBottom={true} style={styles.text}>
            city
          </Text>
        </ScrollView>
      </HomeContainer>
    );
  }
}

/**
 * custom styles
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
