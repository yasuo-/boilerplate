/* @flow */
import React, { Component } from "react";
import { ScrollView } from "react-native";

import { Container } from "../components/Organisms/Container";
import type { BaseProps } from "../components/Type";

type HomeContainerProps = BaseProps & {
  withGutter?: boolean,
  children: React.ChildrenArray<React.Element<*>>
};

export default class SectionScrollScreen extends Component<HomeContainerProps> {
  render() {
    const { withGutter, children, style } = this.props;
    return (
      <Container {...{ withGutter }}>
        <ScrollView {...{ style }}>{children}</ScrollView>
      </Container>
    );
  }
}
