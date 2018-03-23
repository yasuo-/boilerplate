import React, { Component } from "react";
import {
  ListView,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

export class Home extends Component {
  static navigationOptions = {
    title: 'Home'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.renderRow = this._renderRow.bind(this);
  }

  _renderRow(row) {
    return (
      <TouchableHighlight
        style={styles.item}
        activeOpacity={1}
        onPress={() => {
          this.props.navigation.navigate(1)
        }}>
        <View style={styles.container}>
          <RkText style={styles.icon}
            rkType='primary moon xxlarge'>icon</RkText>
          <RkText>title</RkText>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        style={styles.list}
        renderRow={this.renderRow}
      />
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 34,
    textAlign: 'center',
    marginRight: 16
  }
}));