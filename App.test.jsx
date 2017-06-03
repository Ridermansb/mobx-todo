import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('My App component', () => {
  test('renders without crashing', () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});