import React from 'react';
import TodoAdd from './TodoAdd';
import renderer from 'react-test-renderer';

describe('My TodoAdd component', () => {

  test('renders without crashing', () => {
    const wrapper = renderer.create(<TodoAdd />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });


  test('if no todo was written on input on submit should NOT call add on store', () => {

    const wrapper = shallow(<TodoAdd />);

    wrapper.find('form').simulate('submit');

    expect(fetchMock.called('/api/version')).toBeFalsy();

  });

  test('after submit, should call add on store', () => {

    //

  });

  test('after submit, should clear the input');

});
