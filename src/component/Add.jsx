import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import { useState } from 'react';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Add = () => {
    const [open,setOpen]=useState(false)
    const StyleModal =styled(Modal)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    })
    const UserBox =styled(Box)({
        display:'flex',
        alignItems:'center',
        gap:20,
        marginBottom:20
    })
  return (
   <>
        <Tooltip onClick={()=>setOpen(true)} title='Delete' sx={{position:'fixed',bottom:30 ,left:{xs:'calc(50% - 25px)', sm:40}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyleModal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
        <Box  width={400} height={300} bgcolor={"background.default"} color={'text.primary'} p={3} borderRadius={5}>
            <Typography color={'gray'} textAlign={'center'} id="modal-modal-title" variant="h6" component="h2">
            Create post
            </Typography>
            <UserBox>
                <Avatar
                    src='https://mui.com/static/images/avatar/1.jpg'
                    sx={{width:30,height:30}}
                />
                <Typography fontWeight={500} variant={'span'}>John Doe</Typography>
            </UserBox>
            <TextField
                sx={{width:'100%'}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack  direction='row' gap={1} mt={2} mb={3}>
                <EmojiEmotionsSharpIcon color='primary'/>
                <ImageIcon color='secondary'/>
                <PersonAddIcon color='success'/>
                <VideoCameraBackIcon color='error'/>
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{width:100}}><DateRangeIcon/></Button>
            </ButtonGroup>
        </Box>
        </StyleModal>
   </>
  )
}

export default Add