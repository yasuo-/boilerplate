/** @flow */

import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import autobind from "autobind-decorator";
import { Constants } from "expo";

/*
import { IosArrowBackOutline } from "../../Molecules/IconButton";
import { Text } from "../../Atom/Text";
import { Theme } from "../../Theme";
*/
import type { NavigatioProps } from "../../Types";

type NavigationBarProps = NavigationBarProps<*> & {
  title: string,
  onPress: () => void
};

export default class NavigationBar extends Component<NavigationBarProps> {
  render() {
    const { title, onPress } = this.props;

    return (
      <Header
        backgroundColor={"white"}
      >
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header >
    );
  }
}
