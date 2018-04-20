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
        onPress={() => navigation.navigate("Booking", { id })}
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

const width = Dimensions.get("window").width - Theme.spacing.base * 3;
const styles = StyleSheet.create({
  container: {
    marginLeft: Theme.spacing.base
  },
  card: {
    width: width,
    borderRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  image: {
    width,
    height: width * 0.62
  },
  text: {
    padding: Theme.spacing.tiny
  }
});