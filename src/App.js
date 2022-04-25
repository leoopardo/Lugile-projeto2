import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NavBar} from "./Components/Navbar/NavBar"
import { Cadastro } from './Components/Navbar/Cadastro/Cadastro';
import { Login } from './Components/Navbar/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path='/'/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/login' element={<Login />}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
