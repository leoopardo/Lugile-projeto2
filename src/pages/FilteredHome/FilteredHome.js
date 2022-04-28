import "./FilteredHome.css"
import { Link } from "react-router-dom";

export function FiltredHome(props) {

    return ( 
        <div className="containerFH">
            <div className="store">
            {props.itens.map((currentItem) => {
                return (
                    <article className="itemFH">
                        <Link to="/filteredHome" className="linkFH">
                            <h1 className="title">{currentItem.title}</h1>
                            <img src={currentItem.image} alt={currentItem.title} className="imgFH"/>
                            <p className="preço"> Preço: ${currentItem.price}</p>
                        </Link>
                    </article>
                )
            })}
            </div>
        </div>
     );
}

