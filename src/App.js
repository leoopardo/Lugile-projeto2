import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar/NavBar';
import {Home} from "./pages/Home/Home"
import {Product} from "./pages/Product/Product"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produto/:prod" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
