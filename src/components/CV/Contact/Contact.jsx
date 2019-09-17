import React from 'react'
import { Icon } from 'antd'
import './Contact.css'

class Contact extends React.Component {
  render () {
    return (
      <div id='Contact' className='Contact'>
        <div className='contactCell'><a href='https://danielhan.dev/'><Icon type="home" className='contactIcon'/><span className='contactLink'>danielhan.dev</span></a></div>
        <div className='contactCell'><a href='mailto:danielhan.sweden@gmail.com'><Icon type="mail" className='contactIcon' /><span className='contactLink'>danielhan.sweden@gmail.com</span></a></div>
        <div className='contactCell'><a href='https://github.com/hex0cter'><Icon type="github" className='contactIcon' /><span className='contactLink'>github.com/hex0cter</span></a></div>
        <div className='contactCell'><a href='https://www.linkedin.com/in/xdanielhan'><Icon type="linkedin" className='contactIcon' /><span className='contactLink'>linkedin.com/in/xdanielhan</span></a></div>
      </div>
    )
  }
}

export default Contact
