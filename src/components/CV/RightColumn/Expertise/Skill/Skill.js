import React from 'react'
import './Skill.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Skill extends React.Component {
  render () {
    return (
      <div className='Skill'>
        <div className='SkillsTitle'>
          {this.props.children}
        </div>
        <div className='SkillBar' ref={this.myInput}>
          <ProgressBar striped variant="info" now={this.props.level} />
        </div>
      </div>
    )
  }
}

export default Skill
