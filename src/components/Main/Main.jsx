import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import CV from '../CV/CV'
import Home from '../Home/Home'

class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Redirect from="/" exact to="home" />
        <Route path='/home' component={Home}/>
        <Route path='/CV' component={CV}/>
        <Route path='/notes' component={() => {
          window.location.href = 'https://hex0cter.github.io/notes'
          return null
        }}/>
      </Switch>
    )
  }
}

export default Main
