import React, { useState } from 'react'
import { AppBar, Avatar, Badge,styled, Box, InputBase, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import {Notifications,Mail,Search,AllInclusive} from '@mui/icons-material';
import { Link } from 'react-router-dom';





const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
  })




export default function Navbar() {
    const[open,setOpen] = useState(false)


  return (
    <AppBar position="sticky" color="secondary">
       <StyledToolbar>

            <Typography sx={{flex:"1",display:{xs:"none",sm:"flex"}}}>
                <Link to="/" className='link'>
                Extreme UI
                </Link>
            </Typography>

                
                <Typography sx={{flex:"1",display:{xs:"flex",sm:"none"}}}>
                    <AllInclusive/>
                </Typography>


                    <Box sx={{flex:"3",display:{xs:"none",sm:"flex", backgroundColor:"white",
                       padding:"0 10px",borderRadius: "5px"}}}>
                           <Search/>
                        <InputBase  placeholder='Search' color="primary" fullWidth/>
                    </Box>

        
                        <Box sx={{flex:"2",display:{xs:"none",sm:"flex"},
                            justifyContent:"end", alignItems:"center",gap:"10px"}}>
                                <Badge badgeContent={4} color="error">
                                    <Link to="/docs" className='link'>
                                        <Mail color="action" />
                                    </Link>
                                </Badge>
                                    <Badge badgeContent={4} color="error">
                                    <Link to="/" className='link'>
                                    <Notifications />
                                    </Link>
                                    </Badge>
                                        <Avatar sx={{width:"35px", height:"35px"}} 
                                        alt="john" src="https://source.unsplash.com/random/?john" onClick={(e) => setOpen(true)} />
                                       
                                
                        </Box>

                        <Box sx={{display:{sx:"flex",sm:"none"}}}  onClick={(e)=>setOpen(true)} >
                        <Avatar sx={{width:"35px", height:"35px"}} 
                                alt="john" src="https://source.unsplash.com/random/?john"/>
                        </Box>
        
       </StyledToolbar>
                    <Menu id="demo-positioned-menu" aria-labelledby="demo-positioned-button" open={open} onClose={(e)=>setOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                    
    </AppBar>
  )
}
