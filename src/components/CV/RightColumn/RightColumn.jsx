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
        <Section header='Summary'>
          <p className='SummaryDetails'>Passionate software engineer with a focus of Test Automation, Tooling and DevOps. Enjoys creating solutions that resolves difficult problems, making softwares that simplify people's daily work. A great team player.</p>
        </Section>
        <Section header='Expertise'>
          <Expertise />
        </Section>
        <Section header='Language'>
          <Language />
        </Section>
        <Section header='Education'>
          <Education><span role="img" aria-label="scholar">🎓</span> Northwestern Polytechnic University, Master in Software Engineering, 2005</Education>
          <Education><span role="img" aria-label="scholar">🎓</span> Northwestern Polytechnic University, Bachelor in Computer Science, 2002</Education>
        </Section>
        <Section header='Qualifications'>
          <p className='SectionDetails'>International Software Testing Qualifications Board (ISTQB) Certified.</p>
        </Section>
      </div>
    )
  }
}

export default RightColumn
