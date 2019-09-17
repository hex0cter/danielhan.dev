import React from 'react'
import './Burger.css'

class Burger extends React.Component {
  constructor (props) {
    super(props)
    this.burgerOpen = props.burgerOpen
    this.onBurgerClicked = props.onBurgerClicked
  }

  render () {
    return (
      <div id='burger' className='Burger' onClick={this.onBurgerClicked}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    )
  }
}

export default Burger
