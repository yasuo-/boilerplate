/** @flow */

import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";

import HomeCardComponent from "../../../components/Organisms/HomeCard/HomeCard";
import APIStore from "../../../../api/index";

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
        <HomeCardComponent
          home={home}
          saved={saved}
          onPress={this.toggleSaved}
        />
      </TouchableWithoutFeedback>
    );
  }
}
