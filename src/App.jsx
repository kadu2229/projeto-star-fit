import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Hero from './components/Hero'
import Planos from './components/Planos'
import Mapa from './components/Mapa'

function App() {
  return (
    <div>
      <Header />
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
