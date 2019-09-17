import React from 'react'
import './TitleBar.css'
import Burger from '../Burger/Burger'

class TitleBar extends React.Component {
  constructor (props) {
    super(props)
    this.burgerOpen = props.burgerOpen
    this.onBurgerClicked = props.onBurgerClicked
  }

  render () {
    return (
      <div className='TitleBar'>
        <Burger
          burgerOpen={this.burgerOpen}
          onBurgerClicked={this.onBurgerClicked}
        />
        <div className='title'>Daniel Han</div>
      </div>
    )
  }
}

export default TitleBar
