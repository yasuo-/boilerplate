/* @flow */
import React, { Component } from "react";

import { Switch as RNSwitch } from "react-native";
// import SwitchComponent from "../../components/Atom/Switch/Switch";
// import autobind from "autobind-decorator";

type SwitchProps = {
  defaultValue?: boolean,
  onToggle?: boolean => void,
  onTintColor?: string
};

type SwitchState = {
  value: boolean
};

export default class Switch extends Component<SwitchProps, SwitchState> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  static defaultProps = {
    onTintColor: "rgba(255, 255, 255, .5)"
  };

  componentWillMount() {
    const { defaultValue } = this.props;
    this.setState({ value: !!defaultValue });
  }

  // @autobind
  toggle() {
    const { onToggle } = this.props;
    const { value } = this.state;
    this.setState({ value: !value });

    if (onToggle) onToggle(!value);
  }

  render() {
    const { onTintColor } = this.props;
    const { value } = this.state;
    return <RNSwitch {...{ onTintColor, value }} onValueChange={this.toggle} />;
  }
}
/**
 * <SwitchComponent
        onTintColoronTintColor
        value={value}
        onValueChange={this.toggle}
      />
 */
