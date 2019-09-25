import React from 'react'
import { Icon } from 'antd'
import './Experience.css'

class Experience extends React.Component {
  render () {
    return (
      <div className='Experience'>
        <div className='ExperienceTitle'>
          <div className="companyIcon"><Icon type="link" style={{ color: '#2d66a7' }}/></div>
          <div className='companyName'><a href={this.props.link} target='_blank' rel="noopener noreferrer">{this.props.company}</a></div>
          <div className='jobTitle'>{this.props.title}</div>
        </div>
        <div className='period'>{this.props.from} - {this.props.to}</div>
        <div className='ExperienceInfo'>{this.props.children}</div>
      </div>
    )
  }
}

export default Experience
