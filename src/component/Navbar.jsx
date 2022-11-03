import { AppBar, Avatar, Badge, Box,Menu, InputBase, MenuItem,alpha , styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import Notification from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
const Navbar = () => {
    const [open,setOpen]=useState(false);
    const StyleToolBar= styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    })
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
          color: 'inherit',
          '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '30ch',
              '&:focus': {
                width: '40ch',
              },
            },
          },
      }));

    const Icons =styled(Box)(({theme})=>({
        display:'none',
        gap:20,
        alignItems:'center',
        [theme.breakpoints.up('sm')]:{
            display:'flex'
        }

    }))
    const Search = styled('div')(({ theme }) => ({
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
          },
        }));
    const UserBox=styled(Box)(({theme})=>({
        display:'flex',
        gap:10,
        alignItems:'center',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    }))
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

  return (
    <AppBar position='sticky'>
        <StyleToolBar>
            <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>Hai Dang</Typography>
            <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon  />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notification />
                </Badge>
                <Avatar
                 sx={{width:30,height:30,cursor:'pointer'}} 
                 src='https://mui.com/static/images/avatar/1.jpg' 
                 onClick={(e)=>setOpen(true)}
                 />

            </Icons>
            <UserBox>
                <Avatar
                 sx={{width:30,height:30 ,cursor:'pointer'}}
                 onClick={(e)=>setOpen(true)}
                src='https://mui.com/static/images/avatar/1.jpg'
                 />
                <Typography variant='span'>John</Typography>
            </UserBox>
        </StyleToolBar>
        <Menu
        sx={{top:40,right:'10px'}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar