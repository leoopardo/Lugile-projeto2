import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
