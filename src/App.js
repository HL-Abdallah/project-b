import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { lightTheme } from './styles/myTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h2" sx={{ textDecorationThickness: "bold" }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>hello app</h1>
      <code>time is : {new Date().toLocaleString()}</code>
      <br />
      <Button variant="contained">a Button</Button>
    </ThemeProvider>
  );
}

export default App;