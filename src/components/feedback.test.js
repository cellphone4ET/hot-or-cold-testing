import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });
  it('Should render the feedback', () => {
    const feedback = "Wrong answer";
    const wrapper = shallow(<Feedback feedback={feedback}/>);
    expect(wrapper.text()).toContain(feedback);
  });
});
