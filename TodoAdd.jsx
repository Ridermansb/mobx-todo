import React, { PureComponent } from 'react'
import { autobind } from 'core-decorators';

export default class extends PureComponent {

  state = {

  }

  @autobind
  onSubmitHandle () {
    const { todoStore } = this.props;
    if (this.state.todo) {
      todoStore.add(this.state.todo);
      this.todoInput.value = undefined;
    }
  }

  @autobind
  onChange(e) {
    console.log('called', e);
    this.setState({ todo: e.target.value });
  }

  render() {
    return <form onSubmit={this.onSubmitHandle}>
      <input type="text" name="todo" required onChange={this.onChange}
      ref={input => (this.todoInput = input)} />
    </form>
  }
}