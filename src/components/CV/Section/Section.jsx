import React from 'react'
import SectionHeader from './SectionHeader/SectionHeader'
import SectionBody from './SectionBody/SectionBody'
import './Section.css'

class Section extends React.Component {
  render () {
    return (
      <div className='Section'>
        <SectionHeader { ...this.props }>{this.props.header}</SectionHeader>
        <SectionBody { ...this.props }>{this.props.children}</SectionBody>
      </div>
    )
  }
}

export default Section
