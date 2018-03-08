/** @flow */

import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { MapView } from "expo";

type MapViewProps = {
  id: string,
  title: string,
  latitude: string,
  longitude: string,
  latitudeDelta: number,
  longitudeDelta: number
};

export default class MapView extends Component<MapViewProps> {
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
    const home = APIStore.home(id);

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
