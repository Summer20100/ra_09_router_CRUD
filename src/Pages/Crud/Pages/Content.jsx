import { Box, Stack, TextField, Divider, Button } from '@mui/material';
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { getData } from './../getData'

const Content = ({ onDelete, newId, data }) => {
  const [sort, setSort] = useState()
  const [post, setPost] = useState()
  const params = useParams()
  const {id} = params

  let url = import.meta.env.VITE_BASE_URL

  const postData = async () => {
    await fetch(url + id)
      .then((response) => response.json())
      .then(({post}) => setPost(post))
  }
  
  useEffect(() => {
    postData()
  }, [])

  useEffect(() => {
    newId(id)
  }, [])

  const newContent = data.filter((el, ind, array) => el.id == id)
  const content = newContent[0].content

  const onClose = (id) => {
    fetch(url + id, {
      method: 'DELETE'
    })
      .then(() => {
        window.location.href = 'http://localhost:5173/posts/'
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Stack sx={{ bgcolor: '#fff', width: 800, borderRadius: 1, padding: '15px' }} 
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
      spacing={0}  
    > 
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
          <Box >
            { content }
          </Box>
        </Stack>
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