import { isObservableArray } from 'mobx';
import { TodoStore } from './todoStore';

describe('todoStore instance', () => {

  let store;
  beforeEach(() => {
    store = new TodoStore();
  })

  test('after add a todo, should add into todos', () => {
    const newTodo = 'To do';
    store.add(newTodo);
    expect(store.todos.toJS()).toEqual(expect.arrayContaining([ newTodo ]));
  })

  test('todos property is a observable array', () => {
    expect(isObservableArray(store.todos)).toBeTruthy();
  })
})