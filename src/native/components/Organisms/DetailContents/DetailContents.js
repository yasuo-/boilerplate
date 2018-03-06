/** @flow */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Animated, Dimensions } from "react-native";
import { Constants } from "expo";
import Swiper from "react-native-swiper";

import APIStore from "../../../../api";

import { VerticalSection } "../../Atom/VerticalSection";
import { Text } from "../../Atom/Text";
import { Avatar } from "../../Atom/Avatar";
import { LoadingIndicator } from "../../Molecules/LoadingIndicator";
import { Ratings } from "../../Molecules/Ratings";
import { MapView } from "../../Molecules/MapView";
import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type DetailContentsProps = BaseProps & {
  scrollY: Animated.Value,
  loading: boolean
};

export default class DetailContents extends Component<DetailContentsProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const { id } = navigation.state.params;
    const home = APIStore.home(id);
    const { scrollY, loading } = this.state;
    const onScroll = Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY
          }
        }
      }
    ]);
    const threshold = height - 57 - Constants.statusBarHeight;
    const backgroundColor = scrollY.interpolate({
      inputRange: [0, threshold - 5, threshold],
      outputRange: ["transparent", "transparent", "white"]
    });
    const iconStyle = {
      color: scrollY.interpolate({
        inputRange: [0, threshold - 5, threshold],
        outputRange: ["white", "white", Theme.typography.color]
      })
    };

    return (
      <ScrollView style={styles.flex} scrollEventThrottle={1} {...{ onScroll }}>
        {loading && <LoadingIndicator style={styles.loading} />}
        {!loading && (
          <Swiper showsPagination={false} {...{ height }}>
            {home.pictures.map(picture => (
              <Image key={picture} source={{ uri: picture }} style={styles.image} />
            ))}
          </Swiper>
        )}
        <VerticalSection style={styles.container}>
          <Text type="header2" gutterBottom={true}>
            {home.title}
          </Text>
          <View style={styles.host}>
            <View>
              <Text type="large" gutterBottom={true}>
                {home.category1}
              </Text>
              <Text gutterBottom={true}>{`Hosted by ${home.host.name}`}</Text>
            </View>
            <Avatar uri={home.host.picture} />
          </View>
          <Text>{`${home.price.amount} ${home.price.currency} per night`}</Text>
          <Ratings value={home.rating.value} votes={home.rating.votes} />
          <Text gutterBottom={true}>{home.description}</Text>
        </VerticalSection>
        <MapView
          id={id}
          title={home.location.address}
          latitude={home.location.lat}
          longitude={home.location.lon}
          latitudeDelta={0.0022}
          longitudeDelta={0.0022}
          style={styles.map}
        />
      </ScrollView>
    );
  }
}

/**
 * custom style
 */
const { width } = Dimensions.get("window");
const height = width * 0.67 + Constants.statusBarHeight;
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  image: {
    width,
    height
  },
  host: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  map: {
    height: width * 0.62,
    width: width
  },
  loading: {
    height
  }
});
