/* @flow */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons as Icon } from "@expo/vector-icons";

import WelcomeScreen from "./screen/WelcomeScreen/Welcome";
import ExploreScreen from "./screen/ExploreScreen/Explore";
import SavedScreen from "./screen/SavedScreen";
import PlansScreen from "./screen/PlansScreen";
import InboxScreen from "./screen/InboxScreen";
import ProfileScreen from "./screen/ProfileScreen/Profile";
import SettingsScreen from "./screen/SettingsScreen";

import { Theme } from "./components/Theme";
import type { NavigationProps } from "./components/Type";

type Tab = { label: string, icon: string };

class CustomTabBar extends Component<NavigationProps<*>> {
  static tabs: Tab[] = [
    { label: "Explore", icon: "ios-search-outline" },
    { label: "Saved", icon: "ios-heart-outline" },
    { label: "Plans", icon: "ios-plane-outline" },
    { label: "Inbox", icon: "ios-chatbubbles-outline" },
    { label: "Profile", icon: "ios-person-outline" }
  ];

  render() {
    const { navigation } = this.props;
    const navState = navigation.state;
    const currentIndex = navState.index;
    const navigationBar = CustomTabBar.tabs;

    return (
      <SafeAreaView style={styles.tabs}>
        <View style={styles.container}>
          {navigationBar.map((info, i) => {
            const color =
              i === currentIndex ? Theme.palette.secondary : "#444444";
            return (
              <TouchableWithoutFeedback
                key={info.label}
                onPress={() =>
                  i !== currentIndex
                    ? this.props.navigation.navigate(info.label)
                    : null
                }
              >
                <View style={styles.tab}>
                  <Icon name={info.icon} size={25} {...{ color }} />
                  <Text style={[styles.label, { color }]}>
                    {info.label.toUpperCase()}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  tabs: {
    borderTopWidth: 1,
    borderColor: "#d6d6d6"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 57
  },
  tab: {
    alignItems: "center"
  },
  label: {
    ...Theme.typography.micro
  }
});

/**
 * StackNavigatorOptions
 * navigation
 */
const StackNavigatorOptions = {
  headerMode: "none",
  cardStyle: {
    backgroundColor: "white"
  }
};

/**
 * ExploreNavigator
 */
const ExploreNavigator = StackNavigator(
  {
    Explore: { screen: ExploreScreen }
    // HomeOverview: { screen: HomeOverview }
  },
  StackNavigatorOptions
);

/**
 * InboxNavigator
 */
const InboxNavigator = StackNavigator(
  {
    Inbox: { screen: InboxScreen }
  },
  StackNavigatorOptions
);

/**
 * SavedNavigator
 */
const SavedNavigator = StackNavigator(
  {
    Saved: { screen: SavedScreen }
  },
  StackNavigatorOptions
);

/**
 * ProfileNavigator
 */
const ProfileNavigator = StackNavigator(
  {
    Profile: { screen: ProfileScreen }
  },
  StackNavigatorOptions
);

/**
 * HomeNavigator
 */
const HomeNavigator = TabNavigator(
  {
    Explore: { screen: ExploreNavigator },
    Saved: { screen: SavedScreen },
    Plans: { screen: PlansScreen },
    Inbox: { screen: InboxScreen },
    Profile: { screen: ProfileNavigator }
  },
  {
    tabBarComponent: CustomTabBar,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#1da1f2", //"tomato",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white"
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

const RootStack = StackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Home: { screen: HomeNavigator }
  },
  StackNavigatorOptions
);

export default RootStack;
