import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.modules.css"

export function Login() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState([]);

    
    useEffect(() => {
        async function getPassword(){
            const response = await axios.get(`https://ironrest.herokuapp.com/findOne/Lugile-usuários?password=${password}`)
            setLogin(response.data)
        }
        getPassword();
    }, [password])


    function handleSubmit(e){
        e.preventDefault()
        navigate(`/userpage/${login._id}`)


    }
  
        return ( 

        <div className="fundo">
            <div className="Body" >
                <form className="Form" onSubmit={handleSubmit} >    
                <h1 className="titulo">Login</h1>  

                    <input className="Input1"
                        name="name"
                        type="text"
                        placeholder="Nome"
                        />
                    
                    <input className="Input2"
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    /> 
                    <button className="Button" type="submit"> Entrar </button> 
                </form>
            </div>
        </div>      
        )
    };            