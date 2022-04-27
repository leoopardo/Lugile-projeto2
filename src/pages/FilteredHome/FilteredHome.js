export function FiltredHome(props) {

    return ( 
        <div className="todos">
            <div className="loja">
            {props.itens.map((currentItem) => {
                return (
                    <article className="iten">
                        <h1 className="productTitle">{currentItem.title}</h1>
                        <img src={currentItem.image} alt={currentItem.title} className="productImg"/>
                        <p>{currentItem.title}</p>
                        <p> Preço: ${currentItem.price}</p>
                    </article>
                )
            })}
            </div>
        </div>
     );
}

