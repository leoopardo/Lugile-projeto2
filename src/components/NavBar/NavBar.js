import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";

export function NavBar(props) {
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        navigate("/filtredHome")
    }
    
    
    return ( 
        <nav className="NavBar">
            <div className="SearchBar">
                <form className="FormSearchBar" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="SearchBar"   
                        placeholder= "pesquise"
                        onKeyUp={(e) => {props.filterState(e.target.value)
                        }}

                        
                    />
                    <button>search</button>
                </form>        
            </div>
            <div className="user">
                <Link to="/cadastro" ><button> Cadastro </button></Link>
                <Link to="/login" ><button> Login </button></Link>
            </div>    
        </nav>
    
     );
}

