import { action, observable } from 'mobx'

class TodoStore {
  @observable todos = []
  @action add(todo) {
    this.todos.push(todo);
  }
}

export { TodoStore };
export default new TodoStore();