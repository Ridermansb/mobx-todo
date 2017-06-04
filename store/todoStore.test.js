import { isObservableArray } from 'mobx';
import fetchMock from 'fetch-mock';
import { TodoStore } from './todoStore';

describe('todoStore instance', () => {

  let store;
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  beforeEach(() => {
    store = new TodoStore();
  })

  test('todos property is a observable array', () => {
    expect(isObservableArray(store.todos)).toBeTruthy();
  })

  test('after call add should call api', () => {
    fetchMock.post(`${API_PREFIX}/todos`, {});
    return store.add('To do').then(() => {
      expect(fetchMock.called(`${API_PREFIX}/todos`)).toBeTruthy();
    })
  })

  test('when resolve promise add should update todos', (done) => {
    const newTodo = { title: 'To do' };
    fetchMock.post(`${API_PREFIX}/todos`, newTodo);
    store
      .add(newTodo.title)
      .then(() => {
        expect(store.todos.toJS()).toEqual(expect.arrayContaining([ newTodo ]));
        done();
      })
  })

  test('when reject promise add should NOT add todos', async () => {
    expect.assertions(1);
    const newTodo = { title: 'To do' };
    fetchMock.post(`${API_PREFIX}/todo`, {
      throws: { ok: false }
    });

    try {
      await store.add(newTodo.title);
    } catch(e) {
      expect(store.todos.toJS()).not.toEqual(expect.arrayContaining([ newTodo ]));
    }

  })
})