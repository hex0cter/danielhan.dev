import React from 'react'
import './Home.css'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className='banner'>
          <div className='bannerContent'>Who am I?</div>
        </div>
        <div className='paragraph'>
          <p>Automation. Tooling. DevOps. This is me.</p>
          <p>I am a software engineer based in Stockholm. I like creating software that solves difficult problems, making tools that simplify other people's daily work, and building solutions that enable the rapid software delivery pipeline.</p>
          <p>I work with containers based cloud services on a daily basis. And I am comfortable programming with C++, Java, Javascript, Python, Ruby, Bash, etc. </p>
          <p>Currently I am actively working with Ruby, Javascript, Docker, Kubernetes, Amazon Web Services (AWS), Jenkins, React, Selenium, TestCafe, Cucumber, etc.</p>
        </div>
        <div className='footer'>All rights reserved by Daniel Han.</div>
      </div>
    )
  }
}

export default Home
