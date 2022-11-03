import Feed from "./component/Feed";
import RightBar from "./component/RightBar";
import SideBar from "./component/SideBar";
import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./component/Navbar";
import Add from "./component/Add";
import { useState } from "react";



function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Stack direction={'row'} spacing={2} justifyContent='space-between' >
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App;
