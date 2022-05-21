import React from 'react'
import {Home,ModeNight,Groups,Storefront,Person,Settings,AccountBox} from "@mui/icons-material"
import { Box,List,ListItem ,ListItemButton,ListItemText,ListItemIcon,Switch    } from '@mui/material'

export default function Sidebar({mode,setMode}) {
  return (
    <Box flex={1.5} sx={{display:{xs:"none",sm:"block"}}} >
        <Box position="fixed">


        <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/">
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText primary="Homepage" />
                  </ListItemButton>
                </ListItem>
                
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                          <Groups/>
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                      </ListItemButton>
                    </ListItem>
                

                          <ListItem disablePadding>
                            <ListItemButton component="a" href="#home">
                              <ListItemIcon>
                                <Storefront/>
                              </ListItemIcon>
                              <ListItemText primary="Marketplace" />
                            </ListItemButton>
                          </ListItem>

                                    <ListItem disablePadding>
                                      <ListItemButton component="a" href="#home">
                                        <ListItemIcon>
                                          <Person/>
                                        </ListItemIcon>
                                        <ListItemText primary="Friends" />
                                      </ListItemButton> 
                                    </ListItem>

                                                <ListItem disablePadding>
                                                  <ListItemButton component="a" href="#home">
                                                    <ListItemIcon>
                                                      <Settings/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Settings" />
                                                  </ListItemButton>
                                                </ListItem>

                                                          <ListItem disablePadding>
                                                                <ListItemButton component="a" href="#home">
                                                                  <ListItemIcon>
                                                                    <AccountBox/>
                                                                  </ListItemIcon>
                                                                  <ListItemText primary="Profile" />
                                                                </ListItemButton>
                                                              </ListItem>
                                              

          </List>




                                <ListItem disablePadding>
                                  <ListItemButton component="a" href="#home">
                                    <ListItemIcon>
                                      <ModeNight/>
                                    </ListItemIcon>
                                    <Switch
                                     onChange={(e)=>setMode(mode === "light" ? "dark" : "light")}
                                    />
                                  </ListItemButton>
                                </ListItem>

        </Box>

    </Box>
  )
}
