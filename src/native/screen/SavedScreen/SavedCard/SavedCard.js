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
  render() {
    const { label, image, onPress } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <SavedCardComponents label={label} image={image} />
      </TouchableWithoutFeedback>
    );
  }
}
