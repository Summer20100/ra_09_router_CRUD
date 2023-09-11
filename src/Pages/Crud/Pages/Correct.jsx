import { Box, Stack, TextField, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './Header'


const Correct = (props) => {
  const { dataPrev } = props
  const [content, setContent] = useState()
  const [list, setList] = useState([])
  const [data, setData] = useState()
  const { id } = props

  const onPost = (ev) => {
    setList((list) => ({
      ...list,
      id: id,
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

  let url = import.meta.env.VITE_BASE_URL + id
  
  const postData = async () => {
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        id: list.id,
        content: list.content
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = 'http://localhost:5173/posts/'
          return response.json()
        }
      }
        //response.json()
      )
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err)
      })
  }

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  const contentPrev = dataPrev.filter((el, ind, array) => el.id == id)
  const contentPrevAdd = contentPrev[0].content

  return (

    <form action='#' >
      <Stack sx={{ bgcolor: '#fff', width: 800, borderRadius: 1, padding: '15px' }} direction="column" justifyContent="space-evenly" alignItems="stretch" spacing={0} >
        <Stack paddingLeft="15px" direction="row" justifyContent='space-between' alignItems='center' sx={{ bgcolor: '#fff', width: 785, minHeight: 50, borderRadius: 1 }}>
          <Box>
            Набор Иконок Паблика
          </Box>
            <Button variant="contained" sx={{ bgcolor: 'inherit', "&:hover": { bgcolor: 'inherit' }, fontSize: 10, margin: 1, minWidth: '10px', padding: .5 }} onClick={ handleBack }>
              <CloseIcon sx={{ color: 'red', fontSize: '20px' }} />
            </Button>
        </Stack>
        <Divider />

        <Stack direction="row" justifyContent='space-between' alignItems='center' multiline
          sx={{ bgcolor: '#fff', minHeight: 50, borderRadius: 1, paddingLeft: '15px', textAlign: 'left' }}
        >
          <Box multiline>
            Текущий текст ПОСТА: { contentPrevAdd }
          </Box>   
        </Stack>      
        <Divider />
        
        <Box sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1 }}>
          <TextField size="small" sx={{ m: 1, width: { sm: 500, md: '98%' }, "& .MuiInputLabel-root": { fontSize: 13 }, "& .MuiInputBase-root": { height: 35 }, }} label="Новый текст поста" multiline fontSize='15px' value={content} onChange={(ev) => onPost(ev)} />
        </Box>
        <Divider />

        <Button variant="contained"
          size='large'
          sx={{ width: 130, bgcolor: `primary.light`, fontSize: 10, margin: 1, alignSelf: 'flex-end' }}
          onClick={(ev) => handleSubmit(ev)}
        >
          Изменить
        </Button>

      </Stack>
    </form>
  )
}

export default Correct 