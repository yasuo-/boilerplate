import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PrimaryText12 from ".";

Enzyme.configure({ adapter: new Adapter() });
const wrap = (props = {}) => shallow(<PrimaryText12 {...props} />);

it("renders props when passed in", () => {
  const wrapper = wrap({
    classNameText: "class",
    linkToText: "https://github.com/",
    text: "PrimaryText12",
    defaultState: () => alert("OK")
  });
  expect(wrapper.find({ id: "PrimaryText12" })).toHaveLength(1);
});
