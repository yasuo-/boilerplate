import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Text from './Text'

Enzyme.configure({ adapter: new Adapter() })
const wrap = (props = {}) => shallow(<Text type={'header1'} numberOfLines={1} gutterBottom={true} children={"text component test"} />)

it('renders props when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.find().toHaveLength(1)
})