import React from 'react'
import Section from '../Section/Section'
import Language from './Language/Language'
import Expertise from './Expertise/Expertise'
import Education from './Education/Education'
import './RightColumn.css'

class RightColumn extends React.Component {
  render () {
    return (
      <div className='RightColumn'>
        <Section header='Language'>
          <Language />
        </Section>
        <Section header='Education'>
          <Education><span role="img" aria-label="scholar">🎓</span>Northwestern Polytechnic University, Master in Software Engineering, 2005</Education>
          <Education><span role="img" aria-label="scholar">🎓</span>Northwestern Polytechnic University, Bachelor in Computer Science, 2002</Education>
        </Section>
        <Section header='Expertise'>
          <Expertise />
        </Section>
      </div>
    )
  }
}

export default RightColumn
