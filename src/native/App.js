/* @flow */

import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";

import getTheme from "../../native-base-theme/components";
import common from "../../native-base-theme/variables/commonColor";

import HomeScreen from "./screen/HomeScreen";
import SavedScreen from "./screen/SavedScreen";
import PlansScreen from "./screen/PlansScreen";
import InboxScreen from "./screen/InboxScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SettingsScreen from "./screen/SettingsScreen";

interface AppState {
  ready: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = { AppState: false };
  }

  render() {
    return (
      <StyleProvider style={getTheme(common)}>
        <RootStack />
      </StyleProvider>
    );
  }
}

/**
 * navigator
 */
const Home = TabNavigator(
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

const RootStack = StackNavigator({
  Home: { screen: Home }
});
