/** @flow */

import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { CitiesCard } from "../../Molecules/CitiesCard";
import { Text } from "../../Atom/Text";
import Images from "../../../../assets/images/index";
import { Theme } from "../../Theme";
import type { BaseProps } from "../../Types";

type CitiesContentsProps = BaseProps & {
  label: string,
  image: number
};

export default class CitiesContents extends Component<CitiesContentsProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPress } = this.props;
    return (
      <View>
        <Text type="header2" gutterBottom={true} style={styles.text}>
          地域で探す
        </Text>

        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <CitiesCard label="Tokyo" image={Images.Tokyo} onPress={onPress} />
          <CitiesCard label="Yokohama" image={Images.Paris} onPress={onPress} />
          <CitiesCard
            label="Saitama"
            image={Images.SanFrancisco}
            onPress={onPress}
          />
          <CitiesCard
            label="Osaka"
            image={Images.CapeTown}
            onPress={onPress}
          />
          <CitiesCard label="Nagoya" image={Images.London} onPress={onPress} />
          <CitiesCard
            label="Kobe"
            image={Images.LosAngeles}
            onPress={onPress}
          />
          <CitiesCard label="Fukuoka" image={Images.Miami} onPress={onPress} />
          <CitiesCard label="Sapporo" image={Images.Nairobi} onPress={onPress} />
        </ScrollView>
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: Theme.spacing.base,
    marginBottom: Theme.spacing.base
  },
  container: {
    paddingRight: Theme.spacing.base
  },
  text: {
    paddingLeft: Theme.spacing.base
  },
});
