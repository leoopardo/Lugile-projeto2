import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UserPage() {
    const params = useParams();
    const [produtos, setProdutos] = useState([]);
    const [login, setLogin] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    
    
    

    useEffect (() => {
        async function fetchUser(){
            const responde = await axios.get(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`
            );

            setLogin(responde.data)

        }
        fetchUser();
    }, [])
    console.log(login);

    useEffect (() => {
        async function fetchProdutos(){
            const responde = await axios.get("https://fakestoreapi.com/products");

            setProdutos(responde.data)
        }
        fetchProdutos();
    }, [] );

// function clickHandleCarrinho(){
        //const carrinhoData = {...login};

        //axios.put(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`), {carrinho: login.carrinho}

        //for(let i = 0; i<login.length; i++){}

    //}
   
    
    return ( 
        <div>
            <h1>Bem vindo (a), {login.name}!</h1>
            <ul>
                {produtos.map((currentProduto) => {
                    return (
                        <>
                            <li>
                                <h1>{currentProduto.title}</h1>
                                <img src={currentProduto.image} alt={currentProduto.title}/>
                                <p>{currentProduto.title}</p>
                                <p> Preço: ${currentProduto.price}</p>
                                <button onClick={(event)=> {
                                    setAllProducts({...allProducts, [event.target.carrinho]: currentProduto })
                                    console.log(allProducts)
                                    axios.put(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`, {carrinho: allProducts })}}> Carrinho </button>
                            </li>
                        </>
                    );
                })};
            </ul>                            
        </div>
    );
};
