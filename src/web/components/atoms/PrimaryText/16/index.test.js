import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PrimaryText16 from ".";

Enzyme.configure({ adapter: new Adapter() });
const wrap = (props = {}) => shallow(<PrimaryText16 {...props} />);

it("renders props when passed in", () => {
  const wrapper = wrap({ id: "PrimaryText16" });
  expect(wrapper.find({ id: "PrimaryText16" })).toHaveLength(1);
});
