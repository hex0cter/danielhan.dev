import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Sidebar from 'react-sidebar'
import MySideBar from './components/MySideBar/MySideBar'
import TitleBar from './components/TitleBar/TitleBar'
import Main from './components/Main/Main'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.onBurgerClicked = this.onBurgerClicked.bind(this)
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }

  onBurgerClicked () {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  render () {
    return (
      <BrowserRouter>
        <Sidebar
          sidebar={MySideBar()}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          shadow={true}
          defaultSidebarWidth={100}
        >
          <TitleBar
            onBurgerClicked={this.onBurgerClicked}
          />
          <Main />
        </Sidebar>
      </BrowserRouter>
    )
  }
}

export default App
