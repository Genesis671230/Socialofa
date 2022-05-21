import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {   Box, createTheme,Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Pages from "./Pages";
import Docs from "./components/Docs";

function App() {
 const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  

  return (
    <Router>

    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>

      <Navbar/>

    {/* <Box sx={{display:"flex",justifyContent:"space-between"}}> */}
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar  mode={mode} setMode={setMode}/>

        <Routes>
          <Route path="/" element={<Pages/>}/>
          <Route path="/docs" element={<Docs/>}/>
        </Routes>
      

    </Stack>
    </Box>
    <Add/>

      {/* </Box> */}
    </ThemeProvider>
    </Router>
    
  );
}

export default App;
