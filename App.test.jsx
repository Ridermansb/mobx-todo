import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import todoStore from './store/todoStore'

describe('My App component', () => {
  test('renders without crashing', () => {
    const wrapper = renderer.create(<App todoStore={todoStore} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});