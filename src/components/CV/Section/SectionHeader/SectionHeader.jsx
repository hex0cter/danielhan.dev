import React from 'react'
import './SectionHeader.css'

class SectionHeader extends React.Component {
  render () {
    return (
      <div className='SectionHeader'>
        {this.props.children}
      </div>
    )
  }
}

export default SectionHeader
