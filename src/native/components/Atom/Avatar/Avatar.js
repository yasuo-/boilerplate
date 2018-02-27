/** @flow */

import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import SHA1 from "crypto-js/sha1";
import { FileSystem } from "expo";

import type { BaseProps } from "../../Types";

type AvatarProps = BaseProps & {
  uri: string
};

type ImageCacheState = {
  uri?: string
};

export default class Avatar extends Component<AvatarProps, ImageCacheState> {
  static SIZE = 50;

  async componentWillMount(): Promise<void> {
    this.setState({});
    const { uri } = this.props;
    const cachedURI = await cacheImage(uri);
    this.setState({ uri: cachedURI });
  }

  render() {
    const { style } = this.props;
    const { uri } = this.state;

    return <Image source={{ uri }} style={[style, styles.image]} />;
  }
}

/**
 * defaultProps
 */
const styles = StyleSheet.create({
  image: {
    height: Avatar.SIZE,
    width: Avatar.SIZE,
    borderRadius: Avatar.SIZE / 2
  }
});

/**
 * cacheImage
 * @param {String} uri
 */
const cacheImage = async (uri: string): Promise<string> => {
  const ext = uri.substring(
    uri.lastIndexOf("."),
    uri.indexOf("?") === -1 ? undefined : uri.indexOf("?")
  );
  const path = FileSystem.cacheDirectory + SHA1(uri) + ext;
  const info = await FileSystem.getInfoAsync(path);

  if (!info.exists) await FileSystem.downloadAsync(uri, path);

  return path;
};
