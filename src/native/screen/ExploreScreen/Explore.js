/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import autobind from "autobind-decorator";
import * as _ from "lodash";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import APIStore from "../../../api";
import HomeContainer from "../HomeScreen";

import { IOSTitleHeader } from "../../components/Organisms/IOSTitleHeader";
import { CategoriesContents } from "../../components/Organisms/CategoriesContents";
import { CitiesContents } from "../../components/Organisms/CitiesContents";
import { HomeContents } from "../../components/Organisms/HomeContents";
import { HomeCard } from "./HomeCard";

import { Theme } from "../../components/Theme";
import type { ScreenProps } from "../../components/Types";

class Explore extends Component<ScreenProps<>> {
  constructor(props) {
    super(props);

    this.Lists = this.Lists.bind(this);
    this.Details = this.Details.bind(this);
  }

  // @autobind
  Lists() {
    this.props.navigation.navigate("List");
  }

  // @autobind
  Details(id: string) {
    this.props.navigation.navigate("Detail", { id });
  }

  render() {
    console.log("--------------");
    console.log(this.props)
    return (
      <HomeContainer>
        <IOSTitleHeader title={"Explore"} />
        <CategoriesContents onPress={this.Lists} />
        <CitiesContents onPress={this.Lists} />
        {_.map(APIStore.homesByCities(), (homes, city) => (
          <HomeContents key={city} city={city}>
            {homes.map(home => (
              <HomeCard key={home.id} onPress={this.Details} {...{ home }} />
            ))}
          </HomeContents>
        ))}
      </HomeContainer>
    );
  }
}

/**
 * mapDispatchToProps
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
)
/**
 * mapStateToProps
 * @param {*} state
 */
const mapStateToProps = state => ({
  authReducer: state.authReducer,
  authTokens: state.authTokens
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
