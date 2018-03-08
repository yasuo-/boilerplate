/* @flow */
import React, { Component } from "react";
import { TextInput } from "react-native";
import autobind from "autobind-decorator";
import * as _ from "lodash";

import { Field } from "../../../components/Molecules/Field";

interface BaseFieldProps {
  label: string,
  contrast?: boolean
}

interface TextFieldProps extends BaseFieldProps {
  textInputRef?: (TextInput) => void,
  toogleSecureEntry?: boolean
}

type TextFieldState = {
  secureTextEntry: boolean
};


export default class TextField extends Component<TextFieldProps, TextFieldState> {
  constructor(props) {
    super(props);

    this.toggleSecureTextEntry = this.toggleSecureTextEntry.bind(this);
  }

  componentWillMount() {
    this.setState({ secureTextEntry: !!this.props.toggleSecureEntry });
  }

  // @autobind
  toggleSecureTextEntry() {
    const { secureTextEntry } = this.state;
    this.setState({ secureTextEntry: !secureTextEntry });
  }

  render() {
    const { label, contrast, textInputRef, toggleSecureEntry } = this.props;
    const { secureTextEntry } = this.state;
    const right = { label: "Show", onPress: this.toggleSecureTextEntry };
    const keysToFilter = ["contrast", "label", "textInputRef", "toggleSecureEntry"];
    const props = _.pickBy(this.props, (value, key) => keysToFilter.indexOf(key) === -1);
    const inputStyle = [styles.textInput];


    if (contrast) inputStyle.push(styles.textInputContrast);

    return (
      <Field {...{ label, contrast, right: toggleSecureEntry ? right : undefined }}>
        <TextInput
          secureTextEntry={secureTextEntry}
          ref={textInputRef}
          style={inputStyle}
          {...props}
          selectionColor={contrast ? "white" : "black"}
          underlineColorAndroid="transparent"
        />
      </Field>
    );
  }
}
