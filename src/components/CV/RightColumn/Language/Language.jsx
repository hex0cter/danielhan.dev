import React from 'react'
import './Language.css'

class Language extends React.Component {
  render () {
    return (
      <div id='Language' className='Language'>
        <div><span role="img" aria-label="chinese">🇨🇳</span> Chinese, native</div>
        <div><span role="img" aria-label="english">🇬🇧</span> English, fluent in writing/speaking</div>
        <div><span role="img" aria-label="swedish">🇸🇪</span> Swedish, basic</div>
      </div>
    )
  }
}

export default Language
