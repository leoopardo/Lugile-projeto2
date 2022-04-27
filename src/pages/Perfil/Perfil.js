import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function Perfil() {
    const params = useParams();
    const navigate = useNavigate();
    const [cadastro, setCadastro] = useState({
        nome:"",
        password:"",
        endereço:"",
        telefone:"",
        email:"",

    });


    useEffect(()=> {
        async function fetchUser(){
            const response = await axios.get(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`
            );

            setCadastro({...response.data})
        }
            fetchUser();

    }, [params.id]);

    function handleChange(e){
        setCadastro({[e.target.name]: e.target.value})
    };

   async function handleSubmit (e) {
        e.preventDefault();


       await axios.put(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`, cadastro)
    
}

 async function handleDelete(){
     
     await axios.delete(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`)

     navigate("/");
 }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputName">Nome:</label>
                <input
                id="inputName"
                name="name"
                value={cadastro.name}
                onChange={handleChange}
                />

                <label htmlFor="inputPassword">Senha:</label>
                <input
                id="inputPassword"
                name="password"
                value={cadastro.password}
                onChange={handleChange}
                />

                <label htmlFor="inputEndereço">Endereço:</label>
                <input
                id="inputEndereço"
                name="endereço"
                value={cadastro.endereço}
                onChange={handleChange}
                />

                <label htmlFor="inputTelefone">Telefone:</label>
                <input
                id="inputTelefone"
                name="telefone"
                value={cadastro.telefone}
                onChange={handleChange}
                />

                <label htmlFor="inputEmail">Email:</label>
                <input
                id="inputEmail"
                name="email"
                value={cadastro.email}
                onChange={handleChange}
                />

                <button type="submit">Editar!</button>
                <button onClick={handleDelete} >Deletar</button>


            </form>
        </div>
    );
}

