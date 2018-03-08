/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { List, ListItem, Body } from "native-base";
import autobind from "autobind-decorator";

import { NavigationBar } from "../../components/Organisms/NavigationBar";
import { Container } from "../../components/Organisms/Container";
import { Text } from "../../components/Atom/Text";
import { Switch } from "./Switch";
import { Theme } from "../../components/Theme";
import type { ScreenParams } from "../../components/Types";

export default class Settings extends Component<
  ScreenParams<{ currency: string }>
> {
  constructor(props) {
    super(props);

    this.currencies = this.currencies.bind(this);
  }

  // @autobind
  currencies() {
    const { navigation } = this.props;
    const currency = navigation.state.params
      ? navigation.state.params.currency
      : "Japan (円)";
    navigation.navigate("Currencies", { currency });
  }

  render() {
    const { navigation } = this.props;
    const currency = navigation.state.params
      ? navigation.state.params.currency
      : "Japan (円)";

    return (
      <Container>
        <NavigationBar title="Settings" {...{ navigation }} />
        <View>
          <List>
            <ListItem style={styles.listItem}>
              <Body>
                <Text>Notifications</Text>
              </Body>
              <Switch onTintColor={Theme.palette.primary} />
            </ListItem>
            <ListItem style={styles.listItem} onPress={this.currencies}>
              <Body>
                <Text>Currency</Text>
              </Body>
              <Text style={styles.currency}>{currency}</Text>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.spacing.base
  },
  listItem: {
    height: 50
  },
  currency: {
    color: Theme.palette.primary
  }
});
