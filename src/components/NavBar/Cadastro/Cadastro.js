import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.modules.css"

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
        <form className="Body" onSubmit={handleSubmit} >
            <div className="Form" >
                    <h1>Digite seus dados</h1>

                    <input className="Input1"
                    name="name"
                    type="text"
                    placeholder="nome"
                    onChange={handleChange}
                    />


                    <input className="Input2"
                    name="password"
                    type="password"
                    placeholder="senha"
                    onChange={handleChange}
                    />

                     <input className="Input3"
                    name="endereço"
                    type="text"
                    placeholder="endereço"
                    onChange={handleChange}
                    />

                     <input className="Input4"
                    name="telefone"
                    type="text"
                    placeholder="telefone"
                    onChange={handleChange}
                    />

                     <input className="Input5"
                    name="email"
                    type="text"
                    placeholder="email"
                    onChange={handleChange}
                    />

                    <button className="Button" type="submit">Cadastrar</button>

                </div>
            </form>
        
     );
}

