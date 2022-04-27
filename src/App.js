import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar/NavBar';
import {Home} from "./pages/Home/Home"
import {Product} from "./pages/Product/Product"
import { useState, useEffect } from "react"
import { Login } from './components/NavBar/Login/Login';
import {Cadastro} from "./components/NavBar/Cadastro/Cadastro"
import { FiltredHome} from './pages/FilteredHome/FilteredHome'
import { UserPage } from './pages/UserPage/UserPage';
import { Perfil } from './pages/Perfil/Perfil';

function App() {
  const [itens, setItens] = useState([])
  const [backUp, setBackUp] = useState([...itens])

  useEffect(() => {
    async function getItens(){
      const response = await axios.get('https://fakestoreapi.com/products');
      setItens(response.data);
      setBackUp(response.data);
    }
    getItens()
  }, [])

  console.log(itens)
  function filterItems(filterParams){
    if (filterParams === ""){
      setItens(backUp);
      return;
    }

    const filtred = itens.filter((currentItem) => {
      return (currentItem.title || currentItem.description || currentItem.category)
      .toLowerCase()
      .includes(filterParams.toLowerCase());
    });
    setItens(filtred)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar filterState={filterItems}/>
        <Routes>
            <Route path='/filtredHome' element={<FiltredHome itens={itens}/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/produto/:prod" element={<Product/>}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/userpage/:id' element={<UserPage produtos={itens} />} />
            <Route path='/perfil/:id' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
