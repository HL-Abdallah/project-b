import { Routes, Route } from 'react-router-dom';
import PrimaryLayout from './components/PrimaryLayout'

function App() {
  return (
    <>
      <PrimaryLayout />
      <Routes>
        <Route path='/' element={null} />
      </Routes>
    </>
  );
}

export default App;