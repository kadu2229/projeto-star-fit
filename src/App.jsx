import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Planos from './components/Planos';
import Mapa from './components/Mapa';
import Cabecalio from './components/Cabecalio';

function App() {
  return (
    <div>
      <Cabecalio />
      <Routes>
        <Route path='/' element={ <>
          <Hero />
          <Planos />
          <Mapa />
        </> } />
      </Routes>
    </div>
  )
}

export default App
