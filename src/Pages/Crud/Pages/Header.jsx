import { Button, Box, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Post from './Post'

const Header = ({ data }) => {
  const onDelete = (el) => {
    console.log(el)
  }

  let { content, id } = data

  let setPosts = data.map((el) =>  <Post onDelete={ onDelete }  key={ el.id } item={ el } /> )

  return (
    <>
      <Stack sx={{ bgcolor: '#fff', height: 50,  width: 800, borderRadius: 1}} alignItems="flex-end" >
        <NavLink to='/posts/new/'>
          <Button variant="contained" 
            size='large'
            sx={{ width: 130, bgcolor: `primary.light`, fontSize: 10, margin: 1 }} >
              Создать пост
          </Button>
        </ NavLink>
      </Stack>
      { setPosts }
    </>

  )
}

export default Header 