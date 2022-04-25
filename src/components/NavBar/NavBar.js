import "./NavBar.css"
import { Link } from "react-router-dom";

export function NavBar(props) {
    return ( 
        <nav className="NavBar">
            <div className="SearchBar">
                <form className="FormSearchBar">
                    <input 
                        type="text"
                        className="SearchBar"   
                        placeholder= "pesquise"
                        onKeyUp={(e) => {props.filterState(e.target.value)
                        }}
                    />
                </form>        
            </div>
            <div className="user">
                <Link to="/cadastro" ><button> Cadastro </button></Link>
                <Link to="/login" ><button> Login </button></Link>
            </div>    
        </nav>
    
     );
}

