import { Box, Stack, TextField, Divider, Button } from '@mui/material';
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useParams } from 'react-router-dom';
import { getData } from './../getData'

const Content = ({ onDelete, newId }) => {
  const [sort, setSort] = useState()
  const [post, setPost] = useState()
  const params = useParams()
  const {id} = params

  //let url = 'https://09backend.summer20100.repl.co/posts/'
  let url = import.meta.env.VITE_BASE_URL

  const postData = async () => {
    await fetch(url + id)
      .then((response) => response.json())
      .then(({post}) => setPost(post))
  }
  
  useEffect(() => {
    // fetch(import.meta.env.VITE_BASE_URL + id)
    postData()
  }, [])

  useEffect(() => {
    newId(id)
  }, [])

  ///let data = getData(url)
  
  console.log(post)
  //console.log(data)
  //console.log(id)
  const { content } = post
  console.log(content)
  
  //const newContent = data.map(el => console.log(el))
  //console.log(newContent)
  
  //const { content } = post

  const onClose = (id) => {
    fetch(url + id, {
      method: 'DELETE'
    })
      .then(() => {
        //window.location.href = 'https://09routercrud.summer20100.repl.co/posts/'
        window.location.href = 'http://localhost:5173/posts/'
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Stack sx={{ bgcolor: '#fff', width: 800, borderRadius: 1, padding: '15px' }} 
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
      spacing={0}  
    > 
        <Stack direction="row"  justifyContent='space-between' alignItems='center' 
            sx={{ bgcolor: '#fff', 
            width: 800, 
            minHeight: 50, 
            borderRadius: 1, 
            paddingLeft: '15px', 
            textAlign:'left' }}
        >
            <Box>ФИО</Box>
        </Stack>
        <Divider />
        <Box sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1 }}>
            {/* { newContent } */}
            { content }
        </Box>
        <Divider />
        <Stack direction="row"  justifyContent='space-between' alignItems='center' 
            sx={{ bgcolor: '#fff', 
            width: 800, 
            minHeight: 50, 
            borderRadius: 1, 
            paddingLeft: '15px', 
            textAlign:'left' }}
        >
            <Box>Набор иконок</Box>
        </Stack>

        <Divider />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" >
          <NavLink to={'/correct/' + id} >
            <Button variant="contained" id={ id }
              size='large' 
              sx={{ width: 130, bgcolor: `primary.light`, fontSize: 10, margin: 1}}
             >
                Изменить
            </Button>
          </NavLink>
            <Button variant="contained" 
              size='large' 
              color="error"
              sx={{ width: 130, bgcolor: `primary.red`, fontSize: 10, margin: 1 }}
              onClick={() => onClose(id) }
            >
                    Удалить
            </Button>
        </Stack>
    </Stack>
  )
}

export default Content 