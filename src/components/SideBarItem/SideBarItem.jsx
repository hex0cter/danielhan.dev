import React from 'react'
import './SideBarItem.css'
import { Icon } from 'antd'

class SideBarItem extends React.Component {
  constructor (props) {
    super(props)
    this.url = props.url
    this.icon = props.icon
  }

  render () {
    return (
      <div className='SideBarLink hvr-underline-from-left'>
        <a href={this.url}>
          <div className=''>
            <Icon type={this.icon} className='SideBarIcon' theme="filled"/> {this.props.children}
          </div>
        </a>
      </div>
    )
  }
}

export default SideBarItem
