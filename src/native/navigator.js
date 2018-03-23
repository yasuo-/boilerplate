/* @flow */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  DrawerNavigator
} from "react-navigation";
import { withRkTheme } from 'react-native-ui-kitten';
import { Ionicons as Icon } from "@expo/vector-icons";
import * as Screens from './screens';

class CustomTabBar extends Component {
  static tabs: Tab[] = [
    { label: "Home", icon: "ios-search-outline" },
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
              i === currentIndex ? "#444444" : "#444444";
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
  label: {}
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
 * ProfileNavigator
 */
const ProfileNavigator = StackNavigator(
  {
    Profile: { screen: Screens.Profile }
  },
  StackNavigatorOptions
);

/**
 * HomeNavigator
 */
const HomeNavigator = StackNavigator(
  {
    Home: { screen: Screens.Home }
  },
  StackNavigatorOptions
);

/**
 * RootNavigator
 */
const RootNavigator = TabNavigator(
  {
    Home: { screen: HomeNavigator },
    Profile: { screen: ProfileNavigator }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Profile") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }
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

const RootStack = StackNavigator(
  {
    // Welcome: { screen: WelcomeScreen },
    Home: { screen: RootNavigator }
  },
  StackNavigatorOptions
);

export default RootStack;