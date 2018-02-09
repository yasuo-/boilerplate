import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PageTemplate from ".";

Enzyme.configure({ adapter: new Adapter() });
const wrap = (props = {}) => shallow(<PageTemplate {...props} />);

it("renders props when passed in", () => {
  const wrapper = wrap({ id: "PageTemplate" });
  expect(wrapper.find({ id: "PageTemplate" })).toHaveLength(1);
});
