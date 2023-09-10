import { Box, Stack, TextField, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header'


const NewPost = () => {
  const [content, setContent] = useState()
  const [list, setList] = useState([])
  const [data, setData] = useState()


  const onPost = (ev) => {
    setList((list) => ({
      ...list,
      userId: new Date().getTime(),
      content: ev.target.value
    }))
    setContent(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    postData()
    setContent('')
    setList('')
  }

  let url = import.meta.env.VITE_BASE_URL

  //let url = 'https://09backend.summer20100.repl.co/posts/'
  
  const postData = async () => {
    !content 
    //? window.location.href = 'https://09routercrud.summer20100.repl.co/posts/'
    ? window.location.href = 'http://localhost:5173/posts/'
    : await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        userId: list.userId,
        content: list.content
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = 'http://localhost:5173/posts/'
          //window.location.href = 'https://09routercrud.summer20100.repl.co/posts/'
          return response.json()
        }}
      )
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err)
      })

    
  }

  return (

    <form action='#' >
      <Stack sx={{ bgcolor: '#fff', width: 800, borderRadius: 1, padding: '15px' }} direction="column" justifyContent="space-evenly" alignItems="stretch" spacing={0} >
        <Stack paddingLeft="15px" direction="row" justifyContent='space-between' alignItems='center' sx={{ bgcolor: '#fff', width: 785, minHeight: 50, borderRadius: 1 }}>
          <Box>
            Набор Иконок Паблика
          </Box>
          <NavLink to='/posts/'>
            <Button variant="contained" sx={{ bgcolor: 'inherit', "&:hover": { bgcolor: 'inherit' }, fontSize: 10, margin: 1, minWidth: '10px', padding: .5 }} >
              <CloseIcon sx={{ color: 'red', fontSize: '20px' }} />
            </Button>
          </NavLink>
        </Stack>
        <Divider />
        <Box sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1 }}>
          <TextField size="small" sx={{ m: 1, width: { sm: 500, md: '98%' },
            "& .MuiInputLabel-root": { fontSize: 13 }, 
            "& .MuiInputBase-root": { minHeight: 35, width: 760 }, }}
            label="Напишите новый пост" multiline fontSize='15px' value={content} onChange={(ev) => onPost(ev)} />
        </Box>
        <Divider />

        <Button variant="contained"
          size='large'
          sx={{ width: 130, bgcolor: `primary.light`, fontSize: 10, margin: 1, alignSelf: 'flex-end' }}
          onClick={(ev) => handleSubmit(ev)}
        >
          Опубликовать
        </Button>

      </Stack>
    </form>
  )
}

export default NewPost 