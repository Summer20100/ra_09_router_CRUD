import { Route, Routes } from 'react-router-dom'
import s from './NotFound.module.css'
import { MyLinkButton, NameLesson } from './../../mystyle.jsx'
import { Container } from '@mui/material';


const NotFound = () => {
  return (
    <div className="mainContainer">
      <div className={ s.page }>
        <div className={ s.border }>
          Такой страницы пока не существует...
        </div>

        {/* <Container sx={{
          // bgcolor: '#71d171',
          borderRadius: 2,
          borderWidth: 2,
          p: 2,
          minWidth: 300,
        }} >
            <Container sx={{
              bgcolor: '#71d171',
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }} >
              Такой страницы пока не существует...
            </Container>
          </Container> */}

      </div>
    </div>
  )
}

export default NotFound
