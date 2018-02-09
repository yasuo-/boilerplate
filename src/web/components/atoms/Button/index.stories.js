import React from "react";
import { storiesOf } from "@storybook/react";
import FinishButton from ".";

storiesOf("FinishButton", module).add("default", () => (
  <FinishButton finish="on" />
));
