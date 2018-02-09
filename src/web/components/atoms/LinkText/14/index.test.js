import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PrimaryText14 from ".";

Enzyme.configure({ adapter: new Adapter() });
const wrap = (props = {}) => shallow(<PrimaryText14 {...props} />);

it("renders props when passed in", () => {
  const wrapper = wrap({ id: "PrimaryText14" });
  expect(wrapper.find({ id: "PrimaryText14" })).toHaveLength(1);
});
