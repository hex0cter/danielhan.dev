import React from 'react'
import Section from '../Section/Section'
import Experience from './Experience/Experience'
import './LeftColumn.css'

class LeftColumn extends React.Component {
  render () {
    return (
      <div className='LeftColumn'>
        <Section header='Mission'>
          <p>To create software that solves difficult problems, make tools that simplify people's daily work, and build solutions that enable the rapid software delivery pipeline.</p>
        </Section>
        <Section header='Experience'>
          <Experience
            from='2015'
            to='PRESENT'
            company='Klarna'
            link='https://www.klarna.com/'
            title='Test Automation/DevOps Engineer'>
            Developed the automated end2end test framework for Klarna payment solution. Developed the web shop tool for manual system verification. Developed Klarna Payments Client and its release pipeline.
          </Experience>

          <Experience
            from='2013'
            to='2015'
            company='G&D'
            link='https://www.gi-de.com/'
            title='Test Automation Engineer'>
            Implemented and maintained the auto test framework for NFC Enabler. Designed and implemented the performance test framework. Designed and implemented the test automation tool for SIM Certification.
          </Experience>

          <Experience
            from='2010'
            to='2013'
            company='Amino'
            link='https://www.aminocom.com/'
            title='Software Engineer'>
            Designed and implemented the auto test framework for Amino Freedom set-top box. Designed and implemented an interactive D-Bus CLI (Command Line Interface) tool for Amino media player.
          </Experience>
          <Experience
            from='2008'
            to='2010'
            company='Ericsson'
            link='https://www.ericsson.com/'
            title='Software Engineer'>
            Developed and maintained Ericsson’s Session Border Gateway and Media Gateway Controller for the IMS network.
          </Experience>
          <Experience
            from='2004'
            to='2008'
            company='Alcatel-Lucent'
            link='https://www.al-enterprise.com/'
            title='Software Engineer'>
            Developed and maintained ISUP/TUP in PSTN (Public Switched Telephone Network) system.
          </Experience>
          <Experience
            from='2003'
            to='2004'
            company='Huawei'
            link='https://www.huawei.com/'
            title='Software Developer'>
            Developed Element Management System (EMS) for Huawei’s WCDMA network.
          </Experience>
        </Section>
      </div>
    )
  }
}

export default LeftColumn
