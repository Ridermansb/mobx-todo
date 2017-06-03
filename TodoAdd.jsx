import React, { PureComponent } from 'react'

export default class extends PureComponent {

  onSubmitHandle () {

  }

  render() {
    return <form onSubmit={this.onSubmitHandle}>
      <input type="text" />
    </form>
  }
}