/** @flow */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";

import { Text } from "../../../components/Atom/Text";
import { IconButton } from "../../../components/Molecules/IconButton";
import { Theme } from "../../../components/Theme";

import type { Home } from "../../../../model/model";

type HomeCardProps = {
  home: Home,
  onPress: string => void
};

type HomeCardState = {
  saved: boolean
};

export default class HomeCard extends Component<HomeCardProps, HomeCardState> {
  constructor(props) {
    super(props);
    this.state = {
      saved: []
    };
    this.toggleSaved = this.toggleSaved.bind(this);
  }

  listener: (Home[]) => void;

  // @autobind
  toggleSaved() {
    const { id } = this.props.home;
    this.listener = (home: Home[]) => {
      this.setState({
        saved: homes.filter(home => home.id === id).length === 1
      });
    };
    // APIStore.savedHomes(this.listener);
  }

  componentWillUnmount() {
    // APIStore.dispose(this.listener);
  }

  render() {
    const { home, onPress } = this.props;
    const { saved } = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => onPress(home.id)}>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: home.pictures[0] }}
            style={styles.image}
          >
            <IconButton
              name={saved ? "ios-heart" : "md-heart-outline"}
              contrast={true}
              onPress={this.toggleSaved}
              style={styles.heartBtn}
            />
          </ImageBackground>
          <Text type="micro" gutterBottom={true}>
            {`${home.category1.toUpperCase()} - ${home.category2.toUpperCase()}`}
          </Text>
          <Text type="large" numberOfLines={2} gutterBottom={true}>
            {home.title}
          </Text>
          <Text type="small" gutterBottom={true}>
            {`${home.price.amount} ${home.price.currency} per person`}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  container: {
    width: 158,
    marginRight: Theme.spacing.small
  },
  image: {
    width: 158,
    height: 103,
    borderRadius: 2,
    marginBottom: Theme.spacing.small,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  heartBtn: {
    justifyContent: "center",
    alignItems: "center"
  }
});
