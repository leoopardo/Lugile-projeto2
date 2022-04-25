import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export function Card() {
    const [produtos, setProdutos] = useState ([])

    useEffect (() => {
        async function fetchProdutos() {
            const response = await axios.get("https://fakestoreapi.com/products");

            setProdutos(response.data)
        };
        fetchProdutos()
    },[]);

    console.log(produtos)




    return(
        <div>
            <section>
                <main>
                    <h1>Veja os nossos produtos</h1>
                    <li></li>
                </main>
                <div>
                    <h2>Mais produtos</h2>
                    <ul>
                         /{produtos.map((currentProduto) => {
                             return (
                               
                                <li>
                                   <Link to={`/Product/${currentProduto.title}`} >
                                    <img src={currentProduto.image} alt={currentProduto.title}/>
                                    <p>{currentProduto.title}</p>
                                    <p>{currentProduto.price}</p>
                                    </Link>
                                    </li>
                                
                             )
                             
                         })
                         
                         }
                         
                    </ul>
                </div>
            </section>
            <section>
                Seções
            </section>

        </div>
    )
}