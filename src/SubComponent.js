import React, { Component } from 'react'
import { Context } from './index'

class SubComponent extends Component {
  state = {
    newValue: 'test'
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <div>name: {context.name}</div>
            <input
              onChange={e => this.setState({ newValue: e.target.value })}
              value={this.state.newValue}
            />
            <button onClick={() => context.handleClick(this.state.newValue)}>
              change
            </button>
            {JSON.stringify(context)}
          </div>
        )}
      </Context.Consumer>
    )
  }
}

export default SubComponent
