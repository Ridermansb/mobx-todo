import React from 'react';
import TodoAdd from './TodoAdd';
import { TodoStore } from './store/todoStore';
import renderer from 'react-test-renderer';

describe('My TodoAdd component', () => {

  const minProps = {
    todoStore: new TodoStore()
  };

  test('renders without crashing', () => {
    const wrapper = renderer.create(<TodoAdd />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });


  test('if no todo was written on input on submit should NOT call add on store', () => {

    const spy = jest.spyOn(minProps.todoStore, 'add');
    const wrapper = shallow(<TodoAdd {...minProps} />);

    wrapper.find('form').simulate('submit');

    expect(spy).not.toHaveBeenCalled();

  });

  test('after submit with todo should call add on store', () => {

    const spy = jest.spyOn(minProps.todoStore, 'add');

    const wrapper = mount(<TodoAdd {...minProps} />);

    const newTodo = 'To it';
    const todoInput = wrapper.find('[name="todo"]');
    todoInput.simulate('change', {
      target: { name: 'todo', value: newTodo },
    });

    wrapper.find('form').simulate('submit');

    expect(spy).toHaveBeenCalledWith(newTodo);

  });

  test('after submit, should clear the input', () => {

    const wrapper = mount(<TodoAdd {...minProps} />);

    const todoInput = wrapper.find('[name="todo"]');
    todoInput.simulate('change', {
      target: { name: 'todo', value: 'To it' },
    });

    wrapper.find('form').simulate('submit');

    expect(todoInput.value).not.toBeDefined();
  });
});
