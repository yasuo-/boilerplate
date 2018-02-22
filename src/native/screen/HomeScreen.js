/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";

import { Container } from "../components/Container/index";
import type { BaseProps, NavigationProps } from "../components/Type";

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
