import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png"
import lupa from "../../images/lupa.png"
import signIn from "../../images/sign in.png"
import logIn from "../../images/transferir.png"

export function NavBar(props) {
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        navigate("/filtredHome")
    }
    
    
    return ( 
        <nav className="NavBar">
            <img src={logo} alt="logo" className="logo"></img>
            <div>   
                <div className="departamentos">
                        <Link to="/Product" className="link"><h2>Roupas Masculinas</h2></Link>
                        <Link to="/Product" className="link"><h2>Roupas Femininas</h2></Link>
                        <Link to="/Product" className="link"><h2>Jóias</h2></Link>
                        <Link to="/Product" className="link"><h2>Eletrônicos</h2></Link>
                    </div>
                <div className="SearchBar">
                
                <form className="FormSearchBar" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="SearchBar"   
                        placeholder= "Buscar produtos"
                        onKeyUp={(e) => {props.filterState(e.target.value)
                        }}

                        
                    />
                    <button className="button"><img src={lupa} alt="lupa" className="lupa"></img></button>
                </form>  
                </div>      
            </div>
            <div className="user">
                <Link to="/cadastro" ><button className="btnCad"> <img src={signIn} alt="Sign in" className="cadastrar"></img> </button></Link>
                <Link to="/login" ><button className="btnLog"> <img src={logIn} alt="Log in" className="login"></img> </button></Link>
            </div>    
        </nav>
    
     );
}

