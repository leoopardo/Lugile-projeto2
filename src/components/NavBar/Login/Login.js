import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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


        <div>
            <form onSubmit={handleSubmit} >              
                <input 
                    name="name"
                    type="text"
                    placeholder="nome"
                    

                />
                
                <input 
                    name="password"
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                /> 
                <button type="submit"> Login </button> 
            </form>
        </div>      
        )
    };            