import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import s from './Start.module.css'
import { MyLinkButton, NameLesson } from './../../mystyle.jsx'

const Start = ({text, unit}) => {

  return (
    <div className="mainContainer">
      <div className={ s.page }>
        <div className={ s.border }>
          <NameLesson text={ text } unit={ unit }/>
        </div>
      </div>
    </div>
  )
}

export default Start

