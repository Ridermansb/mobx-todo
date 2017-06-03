import { action, observable } from 'mobx'
import api from '../api';

class TodoStore {
  @observable todos = []
  @action add(todo) {
    return api(todo)
      .then((resp) => (this.todos.push(resp)));
  }
}

export { TodoStore };
export default new TodoStore();