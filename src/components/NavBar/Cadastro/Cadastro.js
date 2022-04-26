import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cadastro() {
    const navigate = useNavigate();
    const [cadastro, setCadastro] = useState({
        name: "",
        password: "",
        carrinho: [],
    })

    function handleChange(e){
        setCadastro({...cadastro, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();

         await axios.post("https://ironrest.herokuapp.com/Lugile-usuários", cadastro)

        navigate("/login");
        window.location.refresh()

    }
    return ( 
        <form onSubmit={handleSubmit} >
            <div>
                    <h1>Cadastre-se aqui</h1>
                    <p>e começe suas compras..</p>

                    <input 
                    name="name"
                    type="text"
                    placeholder="nome"
                    onChange={handleChange}
                    />


                    <input 
                    name="password"
                    type="password"
                    placeholder="senha"
                    onChange={handleChange}
                    />

                    <button type="submit">Cadastrar</button>

            </div>
        </form>
     );
}

