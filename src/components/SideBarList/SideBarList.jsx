import React from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'

function SideBarList () {
  return (
    <div>
      <SideBarItem url='/home' icon='home'>Home</SideBarItem>
      <SideBarItem url='https://web2md.danielhan.dev/' icon='file-markdown'>Web to markdown</SideBarItem>
      <SideBarItem url='https://carnet.danielhan.dev/' icon='clock-circle'>Tech notes</SideBarItem>
      <SideBarItem url='https://notes.danielhan.dev/' icon='edit'>Notepad</SideBarItem>
      <SideBarItem url='https://github.com/hex0cter/' icon='github'>GitHub</SideBarItem>
      <SideBarItem url='https://www.linkedin.com/in/xdanielhan/' icon='linkedin'>LinkedIn</SideBarItem>
    </div>
  )
}

export default SideBarList
