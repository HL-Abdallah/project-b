import { Routes, Route } from 'react-router-dom';
import PrimaryLayout from './components/PrimaryLayout'
import Article from './routes/Article';
import Evenement from './routes/Evenement';
import ParametresUtilisateurs from './routes/ParametresUtilisateurs';
import Profil from './routes/Profil';
import './styles/css-reset.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import { lightTheme } from './styles/myTheme';

function App() {

  const [theme, setTheme] = useState(lightTheme)


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrimaryLayout changeTheme={(e) => setTheme(e)} />}>
            <Route path='article' element={<Article />} />
            <Route path='evenement' element={<Evenement />} />
            <Route path='profile' element={<Profil />} />
            <Route path='parametresUtilisateur' element={<ParametresUtilisateurs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;