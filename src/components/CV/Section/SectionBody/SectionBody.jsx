import React from 'react'
import './SectionBody.css'

class SectionBody extends React.Component {
  render () {
    return (
      <div className='SectionBody'>
        {this.props.children}
      </div>
    )
  }
}

export default SectionBody
