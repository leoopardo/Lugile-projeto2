import {useState, useEffect, useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css"


export function Card() {
    const [produtos, setProdutos] = useState ([])
    const carousel = useRef(null)

    useEffect (() => {
        async function fetchProdutos() {
            const response = await axios.get("https://fakestoreapi.com/products");

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
          
          <div className="buttonsSection">
                    <button className="btnStyle">Roupas Masculinas</button>
                    <button className="btnStyle">Roupas Femininas</button>
                    <button className="btnStyle">Eletrônicos</button>
                    <button className="btnStyle">Jóias</button>
                </div>
            <section className="section">
               <div className="container">
                 <div className="carousel" ref={carousel}>
                    {produtos.map((item) => {
                        
                    const {title, image, id, price} = item;
                    return(
                   
                    <div className="item" key={id}>
                        <div className="image">
                            <img src={image} alt={title}></img>
                        </div>
                        <div className="info">
                            {/*<span className="title">{title}</span>*/}
                            <span className="price">$ {price} </span>
                        </div>
                    </div>
                    )
                    })} 
                 </div>
                 <div className="buttons">
                     <button onClick={handleLeftBtn}><img src="/src/images/216151_right_chevron_icon.png" alt="Scrool Left"/></button>
                     <button onClick={handleRightBtn}><img src="/src/images/216151_right_chevron_icon.png" alt="Scrool Rigth"/></button>
                 </div>
               </div>
                {/*<div>
                    <h2>Mais produtos</h2>
                    <ul>
                        {produtos.map((currentProduto) => {
                             return (
                               
                                <li>
                                   <Link to={`/Product/${currentProduto.title}`} >
                                    <img src={currentProduto.image} alt={currentProduto.title}/>
                                    <p>{currentProduto.title}</p>
                                    <p>Preço: ${currentProduto.price}</p>
                                    </Link>
                                </li>
                                
                             )
                             
                         })
                         
                         }
                         
                    </ul>
                </div>*/}
            </section>
              

        </div>
    )
}