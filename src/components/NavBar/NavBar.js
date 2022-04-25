import { Link } from "react-router-dom";
import "./NavBar.css"


export function NavBar() {
    return ( 
        <nav className="NavBar">

           <Link to="/cadastro" ><button> Cadastro </button></Link>
           <Link to="/login" ><button> Login </button></Link>
           <p>oi</p>

        
        </nav>
     );
}
