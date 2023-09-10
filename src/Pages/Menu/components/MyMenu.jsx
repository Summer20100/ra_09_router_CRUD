import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink } from 'react-router-dom'
import { MyLinkButton, MyLinkButtonGroup } from './../../../mystyle'
import { Button, ButtonGroup } from '@mui/material';


function MyMenu() {
  return (
    <div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <MyLinkButtonGroup link='/menu/drift'>DRIFT</MyLinkButtonGroup>
        <MyLinkButtonGroup link='/menu/timeattack/'>TIMEATTACK</MyLinkButtonGroup>
        <MyLinkButtonGroup link='/menu/forza'>FORZA</MyLinkButtonGroup>
      </ButtonGroup>
    </div>
  );
}

export default MyMenu