import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });
  it('Should render all the guesses', () => {
    // declare the array of guesses
    const numbers = [90, 23, 17];
    // declare the array of guesses as a prop
    const wrapper = shallow(<GuessList guesses={numbers}/>);
    // declare the instances of each wrapper + number
    const items = wrapper.find('li');
    // expect the amount of items with wrapper to equal amount of
    // numbers in array
    expect(items.length).toEqual(numbers.length);
    // for each item in array expect the number at in that item to
    // equal the number in array
    numbers.forEach((number, index) => {
      expect(items.at(index).text()).toEqual(number.toString());
    });
  });
});
