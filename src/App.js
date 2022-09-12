import Article from './routes/article';
import Profil from './routes/profil';
import Evenement from './routes/evenement';
import ParametresUtilisateurs from './routes/ParametresUtilisateurs';
import { Routes, Route } from 'react-router-dom';
import PrimaryLayout from './components/PrimaryLayout'
import './styles/css-reset.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import { lightTheme } from './styles/myTheme';
import SingleEvent from './routes/SingleEvent';
import EditSingleEvent from './routes/EditSingleEvent';

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
            <Route path="evenement/:event_id" element={<SingleEvent/>}/>
            <Route path="evenement/edit/:event_id" element={<EditSingleEvent/>}/>
            <Route path='profile' element={<Profil />} />
            <Route path='parametresUtilisateur' element={<ParametresUtilisateurs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;