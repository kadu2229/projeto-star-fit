import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Hero /> } />
      </Routes>
    </div>
  )
}

export default App
