import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightSharpIcon from '@mui/icons-material/ModeNightSharp';
const SideBar = ({mode,setMode}) => {
  return (
    <Box   flex='1'p={2}
    sx={{display:{xs:'none',sm:'block'}}}
     >
      <Box position={'fixed'}>

        <List>
          <ListItem disablePadding>
            <ListItemButton  >
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  >
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  >
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  >
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  >
                <ListItemIcon>
                   <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary="Friends" />
            </ListItemButton>
            </ListItem>
           <ListItem disablePadding>
            <ListItemButton  >
                <ListItemIcon>
                   <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Setting" />
            </ListItemButton>
            </ListItem> 
           <ListItem disablePadding>
            <ListItemButton  >
                <ListItemIcon>
                   <AccountBoxIcon/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
            <ListItemButton  >
                <ListItemIcon>
                   <ModeNightSharpIcon/>
                </ListItemIcon>
              <Switch onChange={()=>setMode(mode==="light"?'dark':'light')}/>
            </ListItemButton>
            </ListItem>  
        </List>
      </Box>
     </Box>
  )
}

export default SideBar