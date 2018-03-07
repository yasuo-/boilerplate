/** @flow */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import * as _ from "lodash";
import moment from "moment";

import { Avatar } from "../../Atom/Avatar";
import { Text } from "../../Atom/Text";

import { Theme } from "../../Theme";
// import type { Thread } from "../../../../model/model";

type ThreadItemProps = {
  //  thread: Thread
};

export default class ThreadItem extends Component<ThreadItemProps> {
  render() {
    const { thread } = this.props;
    const lastMessage = _.last(thread.messages);
    const lastActivity = moment(lastMessage.date, "X").format("DD MMM YYYY");

    return (
      <View>
        <Text numberOfLines={1} style={styles.name}>
          sss
         </Text>
      </View>
    );
  }
}

/**
 * custom style
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: Theme.spacing.tiny,
    marginBottom: Theme.spacing.tiny,
    borderBottomWidth: 1,
    borderColor: Theme.palette.lightGray
  },
  overview: {
    flexShrink: 1,
    marginLeft: Theme.spacing.tiny
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Theme.spacing.tiny
  },
  name: {
    fontFamily: Theme.typography.semibold
  }
});

/*
<View style={styles.container}>
          <Avatar uri={thread.picture} />
          <View style={styles.overview}>
            <View style={styles.header}>
              <Text numberOfLines={1} style={styles.name}>
                {thread.name}
              </Text>
              <Text type="small" numberOfLines={1}>
                {lastActivity}
              </Text>
            </View>
            <Text numberOfLines={1}>{lastMessage.message}</Text>
          </View>
        </View>
        */