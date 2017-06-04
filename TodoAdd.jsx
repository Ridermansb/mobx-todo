import React, { PureComponent } from 'react'
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';

@inject("todoStore") @observer
class TodoAdd extends PureComponent {

  state = {

  }

  @autobind
  onSubmitHandle (e) {
    e.preventDefault();
    
    const { todoStore } = this.props;
    if (this.state.todo) {
      todoStore.add(this.state.todo);
      this.todoInput.value = undefined;
    }
  }

  @autobind
  onChange(e) {
    this.setState({ todo: e.target.value });
  }

  render() {
    return <form onSubmit={this.onSubmitHandle}>
      <input type="text" name="todo" required onChange={this.onChange}
      ref={input => (this.todoInput = input)} />
    </form>
  }
}

TodoAdd.wrappedComponent.propTypes = {
  todoStore: PropTypes.shape({
    add: PropTypes.func.isRequired,
  }).isRequired
}

export default TodoAdd