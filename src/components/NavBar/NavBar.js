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
            <img src={"/src/images/logo1.png"} alt="logo"></img>
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
                        placeholder= "pesquise"
                        onKeyUp={(e) => {props.filterState(e.target.value)
                        }}

                        
                    />
                    <button className="button"><img src="/src/images/lupa.png" alt="lupa"></img></button>
                </form>  
                </div>      
            </div>
            <div className="user">
                <Link to="/cadastro" ><button className="btnCad"> Cadastro </button></Link>
                <Link to="/login" ><button className="btnLog"> Login </button></Link>
            </div>    
        </nav>
    
     );
}

