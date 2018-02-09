// https://github.com/diegohaz/arc/wiki/Testing-components
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutPage from ".";

Enzyme.configure({ adapter: new Adapter() });

it("renders", () => {
  shallow(<AboutPage />);
});
