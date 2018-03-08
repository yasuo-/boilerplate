/** @flow */

import React, { Component, Children } from "react";
import { StyleSheet, View, Text, } from "react-native";
import { Button } from "native-base";

import { Theme } from "../../Theme";

interface BaseFieldProps {
  label: string,
  contrast?: boolean
}

interface FieldProps extends BaseFieldProps {
  right?: { label: string, onPress: () => void },
  children: React.Element<*>
}

export default class Field extends Component<FieldProps> {
  render() {
    const { label, contrast, right, children } = this.props;
    const containerStyle = [styles.container];
    const labelStyle = [styles.label];


    if (contrast) {
      containerStyle.push(styles.containerContrast);
      labelStyle.push(styles.labelContrast);
    }

    return (
      <View style={containerStyle}>
        <View style={styles.labelContainer}>
          <Text style={labelStyle}>{label.toUpperCase()}</Text>
          {
            right && (
              <Button onPress={right.onPress} transparent={true}>
                <Text style={labelStyle}>{right.label.toUpperCase()}</Text>
              </Button>
            )
          }
        </View>
        {children}
      </View>
    );
  }
}

/**
 * custom styles
 */
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingBottom: Theme.spacing.tiny,
    marginBottom: Theme.spacing.small
  },
  containerContrast: {
    borderColor: "white"
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    ...Theme.typography.small,
    marginBottom: Theme.spacing.small
  },
  labelContrast: {
    color: "white"
  },
  textInput: {
    ...Theme.typography.regular
  },
  textInputContrast: {
    color: "white"
  }
});
