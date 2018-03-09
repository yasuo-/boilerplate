/** @flow */

import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { MapView } from "expo";

type MapProps = {
  id: string,
  title: string,
  latitude: string,
  longitude: string,
  latitudeDelta: number,
  longitudeDelta: number
};

export default class Map extends Component<MapProps> {
  render() {
    const {
      id,
      title,
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
      style
    } = this.props;

    return (
      <MapView
        style={style}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta
        }}
      >
        <MapView.Marker coordinate={{ latitude, longitude }} title={title} />
      </MapView>
    );
  }
}
