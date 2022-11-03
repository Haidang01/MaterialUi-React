import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
const RightBar = () => {
  return (
    <Box 
    flex='1'  p={2}
    sx={{display:{xs:'none',sm:'block'}}}
    >
      <Box position={'fixed'} width={300}>
          <Typography variant='h6' my={2} fontWeight={100}>Online Friends </Typography>
            <AvatarGroup max={5}  sx={{justifyContent:'start'}} >
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="	https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Remy Sharp" src="	https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="	https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            </AvatarGroup>
          <Typography variant='h6' my={2} fontWeight={100}>Lastest Photos </Typography>
          <ImageList cols={3} rowHeight={100} gap='5'>
            <ImageListItem>
              <img
              src='https://material-ui.com/static/images/image-list/breakfast.jpg'
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src='https://material-ui.com/static/images/image-list/burgers.jpg'
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src='https://material-ui.com/static/images/image-list/burgers.jpg'
              />
            </ImageListItem>
          </ImageList>
          <Typography variant='h6' my={2} fontWeight={100}>Lastest Conversations </Typography>
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar