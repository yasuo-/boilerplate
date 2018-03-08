/** @flow */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import autobind from "autobind-decorator";
import * as _ from "lodash";
import moment from "moment";
import { Constants } from "expo";


import { Text } from "../../../components/Atom/Text";

import APIStore from "../../../../api";
import Booking from "../../../../model/model";
import { Theme } from "../../../components/Theme";
import type { NavigationProps } from "../../../components/Types";

type BookingCardProps = NavigationProps<*> & {
  booking: Booking
};

export default class BookingCard extends Component<ScreenProps<>> {
  render() {
    const { booking, navigation } = this.props;
    const from = moment(booking.from, "X");
    const to = moment(booking.to, "X");
    const home = APIStore.home(booking.home);
    const { id } = home;
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("HomeOverview", { id })}
      >
        <View style={styles.container}>
          <Text gutterBottom={true}>
            {`${from.fromNow()} ${from.format("D")} – ${to.format(
              "D"
            )} ${to.format("MMM")}`}
          </Text>
          <View style={styles.card}>
            <Image source={{ uri: home.pictures[0] }} style={styles.image} />
            <View style={styles.text}>
              <Text type="large" gutterBottom={true}>
                {home.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  root: {
    flexGrow: 1
  },
  background: {
    position: "absolute",
    left: Theme.spacing.base,
    top: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
    backgroundColor: Theme.palette.primary,
    width: 2,
    height
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    top: Platform.OS === "ios" ? Constants.statusBarHeight : 0
  },
  contentContainer: {
    paddingLeft: Theme.spacing.base,
    paddingRight: Theme.spacing.base,
    paddingTop: Theme.spacing.base * 2,
    paddingBottom: Theme.spacing.base * 2 + 57,
    flexDirection: "row"
  },
  border: {
    backgroundColor: Theme.palette.primary,
    width: 2
  },
  city: {
    marginTop: Theme.spacing.base,
    marginBottom: Theme.spacing.base
  },
  header: {
    position: "relative",
    left: -Theme.spacing.base,
    flexDirection: "row",
    alignItems: "center"
  },
  outerCircle: {
    backgroundColor: "white",
    marginRight: Theme.spacing.base - 7 - 1
  },
  innerCircle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: Theme.palette.primary,
    marginLeft: Theme.spacing.base - 7 - 1,
    marginTop: Theme.spacing.tiny,
    marginBottom: Theme.spacing.tiny
  }
});
