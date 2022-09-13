// routes & comp
import Article from './routes/Article';
import Profil from './routes/Profil';
import Evenement from './routes/evenements/Evenement';
import ParametresUtilisateurs from './routes/ParametresUtilisateurs';
import { Routes, Route } from 'react-router-dom';
import PrimaryLayout from './components/PrimaryLayout';
import SingleEvent from './routes/evenements/SingleEvent';
import EditSingleEvent from './routes/evenements/EditSingleEvent';
// styles
import './styles/css-reset.css';
import { lightTheme } from './styles/myTheme';
// mui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material'
// other
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

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
            <Route path="evenement/:event_id" element={<SingleEvent />} />
            <Route path="evenement/edit/:event_id" element={<EditSingleEvent />} />
            <Route path='profile' element={<Profil />} />
            <Route path='parametresUtilisateur' element={<ParametresUtilisateurs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;