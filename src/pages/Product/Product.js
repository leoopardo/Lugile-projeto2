import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

export function Product() {
    const params = useParams();
    console.log(params)
    const [itens, setItens] = useState([]);

    useEffect(() => {
        async function getItens() {
            const response = await axios.get(`https://fakestoreapi.com/products/${params.prod}`);
            setItens(response.data);
            console.log(response)
          }
          getItens()
        }, [])
        console.log(itens)
        
    
 

    return(
        <div>
            <div>
                <img src={itens.image} alt={itens.title}></img>
                <span>{itens.price}</span>
            </div>
            <div>
                <span>{itens.title}</span>
                <span>{itens.category}</span>
                <span>{itens.description}</span>
                <span>{itens.rating}</span>
            </div>


        </div>
        )

    }