import React from 'react'
import { Icon } from 'antd'
import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'
import Contact from './Contact/Contact'

import './CV.css'

class CV extends React.Component {
  render () {
    return (
      <div>
        <div className='Subtitle'>Tooling, Automation, DevOps, Frontend Engineer</div>
        <div id='cv' className='CV'>
          <LeftColumn/>
          <RightColumn/>
        </div>
        <div className='address'>
          <Contact />
        </div>
        <div className='floatingIcon' title='Download this CV!'>
          <div><a href='/static/Daniel-Han.pdf'><Icon type="download" style={{ fontSize: '24px', color: 'white' }}/></a></div>
        </div>
      </div>
    )
  }
}

export default CV
