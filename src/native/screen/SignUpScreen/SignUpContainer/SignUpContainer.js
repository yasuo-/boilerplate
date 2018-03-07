/* @flow */
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Organisms/Container";
import { IconButton } from "../../components/Molecules/IconButton";

import { Theme } from "../../components/Theme";
import type { NavigationProps } from "../components/Type";

type SignUpContainerProps = NavigationProps<*> & {
  children: React.ChildrenArray<React.Element<*>>
};


export default class SignUpContainer extends Component<SignUpContainerProps> {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  // @autobind
  back() {
    this.props.navigation.goBack();
  }

  render() {
    const { children } = this.props;

    return (
      <Container withGutter={true} style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="padding" style={styles.innerContent}>
            <IconButton
              name="ios-arrow-back-outline"
              contrast={true}
              onPress={this.Back}
            />
            <View>
              {children}
            </View>
            <View />
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.palette.primary
  },
  content: {
    flexGrow: 1
  },
  innerContent: {
    flexGrow: 1,
    justifyContent: "space-between"
  }
});
