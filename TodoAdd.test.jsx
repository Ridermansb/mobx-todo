import React from 'react';
import TodoAdd from './TodoAdd';
import { TodoStore } from './store/todoStore';
import renderer from 'react-test-renderer';

describe('My TodoAdd component', () => {

  const minProps = {
    todoStore: new TodoStore()
  };

  test('renders without crashing', () => {
    const wrapper = renderer.create(<TodoAdd.wrappedComponent {...minProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });


  test('if no todo was written on input on submit should NOT call add on store', () => {
    const spy = jest.spyOn(minProps.todoStore, 'add');
    const wrapper = shallow(<TodoAdd.wrappedComponent {...minProps} />);
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(spy).not.toHaveBeenCalled();
  });

  test('on submit should call preventDefault', () => {
    const preventDefault = jest.fn();
    const wrapper = shallow(<TodoAdd.wrappedComponent {...minProps} />);
    wrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
  })

  test('should throw error if no todoStore is provide', () => {
    expect(() => {
      // renderer.create(<TodoAdd.wrappedComponent />)
      shallow(<TodoAdd.wrappedComponent />)
    }).toThrow();
  })

  test('after submit with todo should call add on store', () => {

    const spy = jest.spyOn(minProps.todoStore, 'add');

    const wrapper = mount(<TodoAdd.wrappedComponent {...minProps} />);

    const newTodo = 'To it';
    const todoInput = wrapper.find('[name="todo"]');
    todoInput.simulate('change', {
      target: { name: 'todo', value: newTodo },
    });

    wrapper.find('form').simulate('submit');

    expect(spy).toHaveBeenCalledWith(newTodo);

  });

  test('after submit, should clear the input', () => {

    const wrapper = mount(<TodoAdd.wrappedComponent {...minProps} />);

    const todoInput = wrapper.find('[name="todo"]');
    todoInput.simulate('change', {
      target: { name: 'todo', value: 'To it' },
    });

    wrapper.find('form').simulate('submit');

    expect(todoInput.value).not.toBeDefined();
  });
});
