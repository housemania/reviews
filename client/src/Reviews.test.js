import React from 'react';
import { shallow } from 'enzyme';
import Reviews from './Reviews.jsx';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Reviews debug />);

    expect(component).toMatchSnapshot();
  });
});