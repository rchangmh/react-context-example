import React, { Component } from 'react'
import { render } from 'react-dom'
import SubComponent from './SubComponent'
import MappedFunc from './MappedFunc'
import update from 'immutability-helper'

export const Context = React.createContext()

class Store extends Component {
  state = {
    name: 'Name!',
    colorObjs: [
      {
        name: 'sky',
        color: 'blue',
      },
      {
        name: 'tree',
        color: 'green',
      }
    ]
  }

  handleClick = name => {
    this.setState({ name: name })
  }

  changeColor = (i, newColor) => {
    console.log(i, newColor)
    const newColorObj = update(this.state.colorObjs[i], {
      color: {$set: newColor}
    })
    console.log(newColorObj)
    const newState = update(this.state, {
      colorObjs: {
        $splice: [[i, 1, newColorObj]]
      }
    })
    console.log(newState)
    this.setState({colorObjs: newState.colorObjs})
    console.log(this.state)
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          name: this.state.name,
          handleClick: this.handleClick,
          changeColor: this.changeColor
        }}>
        {this.props.children} {/* Renders <App /> */}
      </Context.Provider>
    )
  }
}

const App = () => (
  <div>
    <SubComponent />
    <MappedFunc />
  </div>
)

render(
  <Store>
    <App /> {/* Child of <Store> */}
  </Store>,
  document.getElementById('root')
)
