import React from 'react';
import { shallow } from 'enzyme';
import Ratings from './Ratings.jsx';
var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

describe('Ratings', () => {
  it('renders a ratings object', () => {
    const ratings = {
      numReviews: '73',
      overall: '2.0',
      accuracy: '2.5',
      communication: '2.0',
      cleanliness: '2.0',
      location: '2.0',
      checkIn: '2.0',
      value: '2.0'
    };
    const wrapper = shallow(<Ratings averageRatings={ratings}/>);
    expect(wrapper.find('#numReviews').text()).to.be.equal("73 Reviews");
    expect(wrapper.find('#accuracy').text()).to.be.equal("Accuracy 2.5");
    expect(wrapper.find('#communication').text()).to.be.equal("Communication 2.0");
    expect(wrapper.find('#clean').text()).to.be.equal("Cleanliness 2.0");
    expect(wrapper.find('#location').text()).to.be.equal("Location 2.0");
    expect(wrapper.find('#checkIn').text()).to.be.equal("Check In 2.0");
    expect(wrapper.find('#value').text()).to.be.equal("Value 2.0");

  });
});

