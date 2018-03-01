/** @flow */

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";
import type { NavigatioProps } from "../../Types";

type IOSTitleHeaderProps = BaseProps & {
  title: string
};

export default class IOSTitleHeader extends Component<IOSTitleHeaderProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <Text type="header1" gutterBottom={true} style={styles.text}>
        {title}
      </Text>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  text: {
    paddingLeft: Theme.spacing.base
  }
});
