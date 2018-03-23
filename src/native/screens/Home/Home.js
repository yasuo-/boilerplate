import React, { Component } from "react";
import {
  Image,
  View
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

export class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let image = RkTheme.current.name === 'light'
      ? <Image source={{ uri: "http://placehold.jp/24/cccccc/ffffff/250x50.png?text=placehold.jp" }} style={{ width: 200, height: 400 }} />
      : <Image source={{ uri: "http://placehold.jp/24/cccccc/ffffff/250x50.png?text=placehold.jp" }} style={{ width: 200, height: 400 }} />;

    return (
      <View style={styles.screen}>
        {image}
        <RkText rkType='header2' style={styles.text}>Welcome to Home</RkText>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    marginTop: 20
  }
}));