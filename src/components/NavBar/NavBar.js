import "./NavBar.css"

export function NavBar(props) {
    return ( 
        <nav className="NavBar">
            <div className="SearchBar">
                <form className="FormSearchBar">
                    <input 
                        type="text"
                        className="SearchBar"   
                        placeholder= "pesquise"
                        onKeyUp={(e) => {props.filterState(e.target.value)
                        }}
                    />
                </form>     
            </div>
        </nav>
    
     );
}

