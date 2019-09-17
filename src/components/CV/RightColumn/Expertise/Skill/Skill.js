import React from 'react'
import './Skill.css'

class Skill extends React.Component {
  render () {
    const maxNumberOfBlocks = 28
    let dark = ''
    let numberOfDark = 0
    for (numberOfDark = 0; numberOfDark < this.props.level / (100 / maxNumberOfBlocks); numberOfDark++) {
      dark += ('█')
    }
    let light = ''
    for (let i = 0; i < maxNumberOfBlocks - numberOfDark; i++) {
      light += ('█')
    }

    return (
      <div className='Skill'>
        <div className='SkillsTitle'>
          {this.props.children}
        </div>
        <div className='SkillBar'>
          <div className='SkillMetricsDark'>{dark}</div>
          <div className='SkillMetricsLight'>{light}</div>
        </div>
      </div>
    )
  }
}

export default Skill
