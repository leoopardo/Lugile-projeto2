import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserPage.css"

export function UserPage() {
    const params = useParams();
    const [produtos, setProdutos] = useState([]);
    const [login, setLogin] = useState([]);
    const [meuCarrinho, setMeuCarrinho] = useState([])
    
    
    

    useEffect (() => {
        async function fetchUser(){
            const response = await axios.get(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`
            );
            setLogin(response.data)
            setMeuCarrinho(response.data.carrinho)
            console.log(response.data.carrinho)
        }
        fetchUser();
    }, [params.id])
    console.log(login);

    useEffect (() => {
        async function fetchProdutos(){
            const responde = await axios.get("https://fakestoreapi.com/products");

            setProdutos(responde.data)
        }
        fetchProdutos();
    }, [] );
   
    return ( 
        <div className="userPage">
            <h1>Bem vindo (a), {login.name}!</h1>
            <div className="todos">
                <div className="loja">
                {produtos.map((currentProduto) => {
                    return (
                        <article className="iten">
                            <article className="product">
                                <h1 className="productTitle">{currentProduto.title}</h1>
                                <img src={currentProduto.image} alt={currentProduto.title} className="productImg"/>
                                <p>{currentProduto.title}</p>
                                <p> Preço: ${currentProduto.price}</p>
                                <button onClick={(event)=> {                           
                                    setMeuCarrinho([...meuCarrinho, currentProduto])
                                    console.log(meuCarrinho)
                                    axios.put(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`, {carrinho: meuCarrinho })}}> Carrinho </button>
                            </article>
                        </article>
                    );
                })}; 
                </div>
                <ul className="carrinho">
                    {meuCarrinho.map((currentProduto) => {
                        return (
                            <li>
                                <h5>{currentProduto.title}</h5>
                            </li>
                        )
                    })}

                </ul>  

            </div> 
                                     
        </div>
    );
};