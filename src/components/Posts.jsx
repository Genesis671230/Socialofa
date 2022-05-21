import { Avatar, Box,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,IconButton,Typography } from '@mui/material'
import {MoreVert,Share,Favorite, FavoriteBorder} from "@mui/icons-material"
import React from 'react'


export default function Posts({title,time,img,para}) {
  return (
    <Box sx={{margin:5}} bgColor="skyblue">
        
        <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#9c27b0" }} aria-label="recipe">R</Avatar>}
        action={<IconButton aria-label="settings"><MoreVert /></IconButton>}
        title={title}
        subheader={time}
      />
            <CardMedia
              component="img"
              height="15%"
              image={img}
              alt="Paella dish"
            />

          <CardContent>

              <Typography variant="body2" color="text.secondary">
                {para}
              </Typography>
            
          </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
       
      </CardActions>
     
    </Card>

        
      </Box>
  )
}
