/* @flow */
import React, { Component } from "react";
import { Switch as RNSwitch } from "react-native";
// import autobind from "autobind-decorator";

type SwitchProps = {
  onValueChange?: boolean => void,
  onTintColor?: string
  value: boolean
};

type SwitchState = {

};

export default class Switch extends Component<SwitchProps> {

  render() {
    const { onTintColor, value, onValueChange } = this.props;

    return (
      <RNSwitch
        {...{ onTintColor, value }}
        onValueChange={onValueChange}
      />
    );
  }
}
