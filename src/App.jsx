
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Features from './Features'
import Login from './Login'
import Header from './Header'


function App() {


  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/About' element={<About/>}/>
    <Route path='/features' element={<Features/>}/>
    <Route path='/Login' element={<Login/>} />
    </Routes>

    </>
  )
}

export default App
