import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar/NavBar';
import { useState, useEffect } from "react"
import axios from 'axios';
import { Login } from './components/NavBar/Login/Login';
import {Cadastro} from "./components/NavBar/Cadastro/Cadastro"
import { FiltredHome} from './pages/FilteredHome/FilteredHome'

function App() {
  const [itens, setItens] = useState([])
  const [backUp, setBeckUp] = useState([...itens])

  useEffect(() => {
    async function getItens(){
      const response = await axios.get('https://fakestoreapi.com/products');
      setItens(response.data);
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
            <Route path='/'/>
            <Route path='/filtredHome' element={<FiltredHome itens={itens}/>}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
