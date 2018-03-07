/** @flow */

import React, { Component } from "react";
import { TouchableWithoutFeedback, Text } from "react-native";
import autobind from "autobind-decorator";

import { ThreadItemComponent } from "../../../components/Organisms/ThreadItem";

// import type { NavigationProps } from "../../../components/Types";
import type { Thread } from "../../../model/model";

type ThreadItemProps = {
  thread: Thread
};

export default class ThreadItem extends Component<ThreadItemProps> {
  constructor(props) {
    super(props);

    this.openThread = this.openThread.bind(this);
  }

  // @autobind
  openThread() {
    const { navigation, thread } = this.props;
    navigation.navigate("Thread", { thread });
  }

  render() {
    const { thread } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.openThread}>
        <Text>test</Text>
      </TouchableWithoutFeedback>
    );
  }
}

/**
 * <ThreadItemComponent thread={thread} />
 */
