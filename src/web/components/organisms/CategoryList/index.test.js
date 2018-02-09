import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CategoryList from ".";

Enzyme.configure({ adapter: new Adapter() });
const wrap = (props = {}) => shallow(<CategoryList {...props} />);

it("renders props when passed in", () => {
  const wrapper = wrap({ id: "title" });
  expect(wrapper.find({ id: "title" })).toHaveLength(1);
});
