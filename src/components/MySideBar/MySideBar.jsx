import React from 'react'
import SideBarList from '../SideBarList/SideBarList'
import './MySideBar.css'

function MySideBar () {
  return (
    <div className='MySiderBar'>
      <div className='sideBarTitle'/>
      <div className='SideBarLinks'>
        <SideBarList>List</SideBarList>
      </div>
    </div>
  )
}

export default MySideBar
