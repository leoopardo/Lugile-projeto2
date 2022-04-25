import lupa from "../../../images/lupa.png"
export function SearchBar(props) {
    
    return (
        <form className="FormSearchBar">
            <input 
            type="text"
            className="SearchBar"   
            placeholder= "pesquise"
            onKeyUp={(e) => {props.filterState(e.target)}}
            />
            
            <button 
            type="submit" 
            className="ButtonForm"
            >
            {<img src={lupa} alt= "lupa" style={{height: "25px"}}/>}
            </button>
            
         </form>    
     );
}
