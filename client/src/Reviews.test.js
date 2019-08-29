import React from 'react';
import { shallow } from 'enzyme';
import ReviewsList from './Reviews.jsx';
var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

describe('ReviewsList', () => {
  it('renders the review component', () => {
    let reviews = [];
    const wrapper = shallow(<ReviewsList reviews={reviews}/>);
    expect(wrapper.find('.feed')).to.have.lengthOf(1);
    expect(wrapper.find('.reviews')).to.have.lengthOf(1);
  });
});