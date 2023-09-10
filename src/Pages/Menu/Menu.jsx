import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink } from 'react-router-dom'
import MyMenu from './components/MyMenu'
import HomePage from './components/HomePage'

import s from './Menu.module.css'
import { MyLinkButton } from './../../mystyle.jsx'


function Menu({children}) {
  return (
    <div className='mainContainer'>
      <MyMenu />
      <div className="page">
        { children }
      </div>
    </div>
  )
}

export default Menu