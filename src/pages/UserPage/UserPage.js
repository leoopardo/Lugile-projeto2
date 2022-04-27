import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserPage.css"


export function UserPage(props) {
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

    function handleRemoveItem(index) {
        const cloneItem = [...meuCarrinho];
        cloneItem.splice(index, 1);
        console.log(index)
        axios.put(`https://ironrest.herokuapp.com/Lugile-usuários/${params.id}`, {carrinho: cloneItem })
    
        setMeuCarrinho(cloneItem);
      }
    
    return ( 
        <div className="userPage">
            <div>
                <h1>Bem vindo (a), {login.name}!</h1>
                <Link to="/"><button>Sair</button></Link>
            </div>
            <div className="todos">
                <div className="loja">
                {props.itens.map((currentProduto) => {
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
                    {meuCarrinho.map((currentProduto, index) => {
                        return (
                            <li>
                                <h5>{currentProduto.title}</h5>
                                <button onClick={() => {handleRemoveItem(index)
                                }}>Remover</button>
                            </li>
                        )
                    })}

                </ul>  

            </div> 
                                     
        </div>
    );
};
