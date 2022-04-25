export function FiltredHome(props) {

    return ( 
        <div>
            {props.itens.map((currentItem) => {
                return (
                    <article>
                        <img src={currentItem.image} alt={currentItem.title}/>
                        <h1>{currentItem.title}</h1>
                        <p>{currentItem.category}</p>
                    </article>
                )
            })}
        </div>
     );
}

