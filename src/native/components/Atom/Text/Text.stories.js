import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";

storiesOf("Text-header1", module).add("default", () => (
  <Text
    type={"header1"}
    numberOfLines={1}
    gutterBottom={true}
    children={"text component"}
  />
));
