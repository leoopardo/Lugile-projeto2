import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./style.modules.css"

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
        <div className="containerPerfil">
            <form className="Form"  onSubmit={handleSubmit}>
                <h1 className="tituloPerfil">Perfil do usuário</h1>
                <label className="Label" htmlFor="inputName">Nome:</label>
                <input className="Input"
                id="inputName"
                name="name"
                value={cadastro.name}
                onChange={handleChange}
                />

                <label className="Label" htmlFor="inputPassword">Senha:</label>
                <input className="Input"
                id="inputPassword"
                name="password"
                type="password"
                value={cadastro.password}
                onChange={handleChange}
                />

                <label className="Label" htmlFor="inputEndereço">Endereço:</label>
                <input className="Input"
                id="inputEndereço"
                name="endereço"
                value={cadastro.endereço}
                onChange={handleChange}
                />

                <label className="Label" htmlFor="inputTelefone">Telefone:</label>
                <input className="Input"
                id="inputTelefone"
                name="telefone"
                value={cadastro.telefone}
                onChange={handleChange}
                />

                <label className="Label" htmlFor="inputEmail">Email:</label>
                <input className="Input"
                id="inputEmail"
                name="email"
                value={cadastro.email}
                onChange={handleChange}
                />
                <div className="btnsPerfil">
                    <button  className="Btn1" type="submit">Fazer alterações</button>
                    <button className="Btn2" onClick={handleDelete} >Deletar</button>
                </div>
            </form>
        </div>
    );
}

