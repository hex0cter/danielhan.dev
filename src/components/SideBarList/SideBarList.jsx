import React from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'

function SideBarList () {
  return (
    <div>
      <SideBarItem url='/home' icon='home'>Home</SideBarItem>
      <SideBarItem url='https://notes.danielhan.dev/' icon='edit'>Quick note</SideBarItem>
      <SideBarItem url='https://github.com/hex0cter/' icon='github'>GitHub</SideBarItem>
      <SideBarItem url='https://www.linkedin.com/in/xdanielhan/' icon='linkedin'>LinkedIn</SideBarItem>
    </div>
  )
}

export default SideBarList
