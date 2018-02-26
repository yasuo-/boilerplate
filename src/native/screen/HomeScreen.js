/* @flow */
import React, { Component } from "react";
import { ScrollView } from "react-native";

import { Container } from "../components/Container/index";
import type { BaseProps } from "../components/Type";

type HomeContainerProps = BaseProps & {
  withGutter?: boolean,
  children: React.ChildrenArray<React.Element<*>>
};

export default class HomeScreen extends Component<HomeContainerProps> {
  render() {
    const { withGutter, style, children } = this.props;
    return (
      <Container {...{ withGutter }}>
        <ScrollView {...{ style }}>{children}</ScrollView>
      </Container>
    );
  }
}
