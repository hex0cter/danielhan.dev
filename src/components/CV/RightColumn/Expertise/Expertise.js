import React from 'react'
import Skill from './Skill/Skill'
import './Expertise.css'

class Expertise extends React.Component {
  render () {
    return (
      <div id='Expertise' className='Expertise'>
        <Skill level={90}>Selenium</Skill>
        <Skill level={94}>Docker</Skill>
        <Skill level={60}>Java</Skill>
        <Skill level={70}>Javascript/React</Skill>
        <Skill level={100}>Jenkins</Skill>
        <Skill level={80}>Ruby</Skill>
        <Skill level={90}>Bash</Skill>
        <Skill level={92}>Python</Skill>
        <Skill level={90}>Git</Skill>
        <Skill level={100}>Cucumber</Skill>
        <Skill level={80}>Linux</Skill>
        <Skill level={35}>Kubernetes</Skill>
        <Skill level={42}>AWS</Skill>
      </div>
    )
  }
}

export default Expertise
