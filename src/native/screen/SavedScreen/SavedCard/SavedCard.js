/** @flow */

import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";

import SavedCardComponents from "../../../components/Organisms/SavedCard/SavedCard";
import { Theme } from "../../../components/Theme";

type SavedCardProps = {
  label: string,
  image: number
};

export default class SavedCard extends Component<SavedCardProps> {
  constructor(props) {
    super(props);

    this.saved = this.saved.bind(this);
  }

  // @autobind
  saved() {
    this.props.navigation.navigate("SavedHomes");
  }

  render() {
    const { label, image } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.saved}>
        <SavedCardComponents label={label} image={image} />
      </TouchableWithoutFeedback>
    );
  }
}