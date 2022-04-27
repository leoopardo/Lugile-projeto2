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
                                <Link to="/cadastro" > <span className="price">$ {price} </span> </Link>
                            </div>
                        </div>
                    )
                    })} 
                 </div>
                 <div className="buttons">
                     <button onClick={handleLeftBtn}><img src="../../images/seta.png" alt="Scrool Left"/></button>
                     <button onClick={handleRightBtn}><img src="../../images/seta.png" alt="Scrool Rigth"/></button>
                 </div>
               </div>
            </section>
        </div>
    )
}