/** @flow */

import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions
} from "react-native";

import { Text } from "../../../components/Atom/Text";
import { IconButtonSave } from "../../../components/Molecules/IconButton";
import { Theme } from "../../../components/Theme";

// import HomeCardComponent from "../../../components/Organisms/HomeCard/HomeCardComponent";
import APIStore from "../../../../api/index";
import type { Home } from "../../../../model/model";

type HomeCardProps = {
  home: Home,
  onPress: string => void
};

type HomeCardState = {
  saved: boolean
};

export default class HomeCardLarge extends Component<HomeCardProps, HomeCardState> {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
    this.toggleSaved = this.toggleSaved.bind(this);
  }

  listener: (Home[]) => void;

  // @autobind
  toggleSaved() {
    const { id } = this.props.home;
    APIStore.toggleSaved(id);
  }

  componentWillMount() {
    const { id } = this.props.home;
    this.listener = (homes: Home[]) => {
      this.setState({
        saved: homes.filter(home => home.id === id).length === 1
      });
    };
    APIStore.savedHomes(this.listener);
  }

  componentWillUnmount() {
    APIStore.dispose(this.listener);
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
            <IconButtonSave
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
const width = Dimensions.get("window").width - Theme.spacing.base * 2;
const styles = StyleSheet.create({
  container: {
    marginBottom: Theme.spacing.base
  },
  image: {
    width,
    height: width / 1.5,
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