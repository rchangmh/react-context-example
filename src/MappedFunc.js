import React, { Component } from 'react'
import { Context } from './index'

class MappedFunc extends Component {
  state = {
    newValue: 'test',
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            {context.state.colorObjs.map((obj, i) => (
              <NestedObjs obj={obj} i={i} changeColor={context.changeColor} />
            ))}
          </div>
        )}
      </Context.Consumer>
    )
  }
}

class NestedObjs extends Component {
  state = {
    newColor: 'B',
  }

  render() {
    return (
      <div id={this.state.i}>
        <div>thing: {this.props.obj.name}</div>
        <div>color: {this.props.obj.color}</div>
        <input
          onChange={e => this.setState({ newColor: e.target.value })}
          value={this.state.newColor}
        />
        <button
          onClick={() =>
            this.props.changeColor(this.props.i, this.state.newColor)
          }>
          change color
        </button>
      </div>
    )
  }
}

export default MappedFunc
