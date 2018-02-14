/* @flow */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";

import HomeScreen from "./screen/HomeScreen";
import SavedScreen from "./screen/SavedScreen";
import PlansScreen from "./screen/PlansScreen";
import InboxScreen from "./screen/InboxScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SettingsScreen from "./screen/SettingsScreen";

/*
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);


export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
*/

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Saved: { screen: SavedScreen },
    Plans: { screen: PlansScreen },
    Inbox: { screen: InboxScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Saved") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        } else if (routeName === "Plans") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        } else if (routeName === "Inbox") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        } else if (routeName === "Profile") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white"
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
