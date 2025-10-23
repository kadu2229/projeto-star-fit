import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cabecalio from './components/Cabecalio';
import Home from './pages/Home';
import AulasPage from './pages/AulasPage';
import ContatoPage from './pages/ContatoPage';
import PlanosPage from './pages/PlanosPage';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Cabecalio />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aulas' element={<AulasPage />} />
        <Route path='/contato' element={<ContatoPage />} />
        <Route path='/planos' element={<PlanosPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
