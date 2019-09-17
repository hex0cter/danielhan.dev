import React from 'react'
import './Education.css'

class Education extends React.Component {
  render () {
    return (
      <div id='Education' className='Education'>
        {this.props.children}
      </div>
    )
  }
}

export default Education
