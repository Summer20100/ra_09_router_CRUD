import s from './Crud.module.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button, Box } from '@mui/material';
import Header from './Pages/Header';
import Post from './Pages/Post';
import { getData } from './getData'
import NewPost from './Pages/NewPost';
import Content from './Pages/Content';
import Correct from './Pages/Correct';
import NotFound from './../NotFound/NotFound'

const Crud = () => {
  const [id, setId] = useState()

  const onDelete = (id) => {
    console.log(id)
  }

  let url = import.meta.env.VITE_BASE_URL
  let data = getData(url)

  const newId = (newId) => {
    setId(newId)
  }

  return (
    <div className='mainContainer'>
      <Routes>
        <Route path='/posts/' element={<Header data={data} />} />
        <Route path="/posts/new/" element={<NewPost />} />
        <Route path='/content/:id' element={<Content data={data} onDelete= { onDelete } newId={ newId }/>} data={data} />
        <Route path='/correct/:id' element={<Correct dataPrev={data} id={ id }/>} />
      </Routes>
    </div>
  )
}

export default Crud 