import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Contato from './Componentes/Contato';
import Empresa from './Componentes/Empresa';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Nav from './Componentes/Nav';

function App() {
  return (
    <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Empresa' element={<Empresa/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>  
        </Routes>
        <Footer/>

    </BrowserRouter>
  )
}

export default App;
