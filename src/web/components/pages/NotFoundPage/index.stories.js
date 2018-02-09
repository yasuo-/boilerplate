// https://github.com/diegohaz/arc/wiki/Storybook
import React from "react";
import { storiesOf } from "@storybook/react";
import { AboutPage } from "components";

storiesOf("AboutPage", module).add("default", () => <AboutPage />);
