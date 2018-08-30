import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Should render the aural status', () => {
    const auralStatus = 'Neil Armstrong';
    const wrapper = shallow(<AuralStatus auralStatus={auralStatus}/>);
    expect(wrapper.text()).toEqual(auralStatus);
  });
});
