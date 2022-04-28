import {useState, useEffect, useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css"
import sale from "../../images/Sale.jpg"
import setas from "../../images/seta.png"
import newcolection from "../../images/Nova coleção.png"



export function Card() {
    const [produtos, setProdutos] = useState ([])
    const carousel = useRef(null)

    useEffect (() => {
        async function fetchProdutos() {
            const response = await axios.get("https://ironrest.herokuapp.com/Lugile-Itens");

            setProdutos(response.data)
        };
        fetchProdutos()
    },[]);

    const handleLeftBtn = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth;

    }
    const handleRightBtn = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth;

    }

    return(
        
        <div>   
           <div className="card1">
                    <img src={newcolection} alt="new colection" className="cardSale"></img>
            </div>
            <section className="section">
               <div className="container">
                 <div className="carousel" ref={carousel}>
                    {produtos.map((item) => {   
                    const {title, image, id, price} = item;
                      
                    return(
                
                    <div className="item" key={id}>
                        <Link to={`/produto/${item.id}`}>
                            <div className="image"> 
                                <img src={image} alt={title}></img> 
                            </div> </Link>
                    
                        <div className="info">

                           <Link to="/cadastro" > <span className="price">$ {price} </span> </Link>
                        </div>
                        </div>
                    )
                    })} 
                 </div>
                 <div className="buttons">
                     <button onClick={handleLeftBtn}><img src={setas} alt="Scrool Left" className="setas"/></button>
                     <button onClick={handleRightBtn}><img src={setas} alt="Scrool Rigth"  className="setas"/></button>
                 </div>
               </div>

               
            </section>
            <div className="card2">
                    <img src={sale} alt="Card Promo" className="cardPromo"></img>
            </div>
             
        </div>
    )
}