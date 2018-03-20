/** @flow */

import React, { Component } from "react";

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import autobind from "autobind-decorator";
import * as _ from "lodash";

import APIStore from "../../../api";

import SectionContainer from "../SectionScreen";
import { NavigationBar } from "../../components/Organisms/NavigationBar";
import { VerticalContents } from "../../components/Organisms/VerticalContents";
import { HomeCard } from "./HomeCard";

import type { ScreenProps } from "../../components/Types";

export default class Lists extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.Details = this.Details.bind(this);
    this.back = this.back.bind(this);
  }

  // @autobind
  Details(id: string) {
    this.props.navigation.navigate("Detail", { id });
  }

  // @autobind
  back() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Header
          backgroundColor={"white"}
        >
          <Left>
          </Left>
          <Body>
            <Title>title</Title>
          </Body>
          <Right />
        </Header >
        <SectionContainer withGutter={true}>
          {_.map(APIStore.homesByCities(), (homes, city) => (
            <VerticalContents key={city} contentsTitle={city}>
              {homes.map(home => (
                <HomeCard key={home.id} onPress={this.Details} {...{ home }} />
              ))}
            </VerticalContents>
          ))}
        </SectionContainer>
      </Container>
    );
  }
}