import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FinishButton from ".";

Enzyme.configure({ adapter: new Adapter() });
const wrap = (props = {}) => shallow(<FinishButton finish="on" />);

it("renders props when passed in", () => {
  const wrapper = wrap({ id: "nav-icon" });
  expect(wrapper.find({ id: "nav-icon" })).toHaveLength(1);
});
