import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
  it('Should restart game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [5, 76, 55, 90],
      feedback: 'You are hot! The correct answer is close.',
      auralStatus: 'You have made 4 guesses.',
      correctAnswer: 91
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });
  it('Should make a guess', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    })
    wrapper.instance().makeGuess(10);
    expect(wrapper.state('guesses')).toEqual([10]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(69);
    expect(wrapper.state('guesses')).toEqual([10, 69]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(89);
    expect(wrapper.state('guesses')).toEqual([10, 69, 89]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
    wrapper.instance().makeGuess(99);
    expect(wrapper.state('guesses')).toEqual([10, 69, 89, 99]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
    wrapper.instance().makeGuess(100);
    expect(wrapper.state('guesses')).toEqual([10, 69, 89, 99, 100]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  })
});
