import React from 'react'
import { Icon } from 'antd'
import './Language.css'

class Language extends React.Component {
  render () {
    return (
      <div id='Language' className='Language'>
        <div><Icon type="check" className='LanguageIcon'/>Chinese, native</div>
        <div><Icon type="check" className='LanguageIcon'/>English, fluent in writing/speaking</div>
        <div><Icon type="check" className='LanguageIcon'/>Swedish, basic</div>
      </div>
    )
  }
}

export default Language
