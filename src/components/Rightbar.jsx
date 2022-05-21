import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Rightbar() {
  return (
    <Box flex={2} bgColor="pink" sx={{display:{xs:"none",sm:"flex"}}}>
           <Box position="fixed" sx={{marginTop:2}} >
               <Typography variant="h6" fontWeight={100}  >
                Online Friends
               </Typography>

               <AvatarGroup max={6} sx={{display:"flex",justifyContent:"start",marginTop:"10px",marginBottom:"18px"}}>
                <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/900x700/?ceo" />
                <Avatar alt="Travis Howard" src="https://source.unsplash.com/random/900x700/?doctor" />
                <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random/900x700/?pilot" />
                <Avatar alt="Agnes Walker" src="https://source.unsplash.com/random/900x700/?nurse" />
                <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900x700/?teacher" />
                <Avatar alt="Agnes Walker" src="https://source.unsplash.com/random/900x700/?actress" />
                <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900x700/?politician" />
                </AvatarGroup>
                <Divider variant="middle" />
                
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                Gallery
               </Typography>

               <ImageList sx={{ width: 317, height: 200,borderRadius:"10px",
                boxShadow: "0px 17px 23px 3px rgba(0,0,0,0.3)" }} cols={3}  rowHeight={200}  mb={2}>
                   <ImageListItem>
                       <img src="https://source.unsplash.com/random/400x300/?blockchain" alt="" />
                   </ImageListItem>
                   
                   <ImageListItem>
                       <img src="https://source.unsplash.com/random/400x300/?health" alt="" />
                   </ImageListItem>

                   
                   <ImageListItem>
                       <img src="https://source.unsplash.com/random/400x300/?biotech" alt="" />
                   </ImageListItem>
                 
               </ImageList>

               <Divider variant="middle"   />


               <Typography variant="h6" fontWeight={100} mt={4} mb={3}>
               Latest Conversation
               </Typography>




               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/400x300/?biotech" />
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

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/400x300/?ceo" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Enterprise to Watchout!"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Mika alis
                        </Typography>
                        {" — I have been with koleido in a meeting they are making collaboration with ..."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/400x300/?healthcare" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Healthcare this weekend"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Jenny derris
                        </Typography>
                        {" — The worst case scenerio of corona has badly affected the soutern part of…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                </List>
           </Box>
    </Box>
  )
}
