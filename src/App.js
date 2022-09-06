import { Routes, Route } from 'react-router-dom';
import PrimaryLayout from './components/PrimaryLayout'
import Article from './routes/Article';
import Evenement from './routes/Evenement';
import ParametresUtilisateurs from './routes/ParametresUtilisateurs';
import Profil from './routes/Profil';
import './styles/css-reset.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PrimaryLayout />}>
        <Route path='article' element={<Article />} />
        <Route path='evenement' element={<Evenement />} />
        <Route path='profile' element={<Profil />} />
        <Route path='parametresUtilisateur' element={<ParametresUtilisateurs />} />
      </Route>
    </Routes>
  );
}

export default App;