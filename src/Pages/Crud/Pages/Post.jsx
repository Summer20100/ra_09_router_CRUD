import { Box, TextField, Divider, Stack } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Post = (props) => {
  const { item, onDelete } = props
  const { content, id } = item

  return (
    <Stack sx={{ bgcolor: '#fff', width: 770, borderRadius: 1, padding: '15px' }}
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
      spacing={0}
    >
      <NavLink to={'/content/' + id} style={{textDecoration: 'none', color: 'inherit'}}>
        <Stack direction="row" justifyContent='space-between' alignItems='center'
          sx={{ bgcolor: '#fff', minHeight: 50, borderRadius: 1, paddingLeft: '15px', textAlign: 'left' }}
        >
          <Box>
            ФИО
          </Box>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent='space-between' alignItems='center' multiline
          sx={{ bgcolor: '#fff', minHeight: 50, borderRadius: 1, paddingLeft: '15px', textAlign: 'left' }}
        >
          <Box multiline>
            { content }
          </Box>   
        </Stack>
      </NavLink >
      <Divider />
      <Box sx={{ bgcolor: '#fff', minHeight: 50, borderRadius: 1 }}>
        <TextField size="small"
          sx={{
            m: 1, width: { sm: 5000, md: '98%' },
            "& .MuiInputLabel-root": { fontSize: 13 },
            "& .MuiInputBase-root": { minHeight: 35, width: 760 },
          }} label="Напишите комментарий" multiline fontSize='15px'>
        </TextField>
      </Box>
    </Stack>
  )
}

export default Post 