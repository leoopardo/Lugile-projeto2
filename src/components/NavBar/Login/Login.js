import { Link } from "react-router-dom";

export function Login() {
  
        return ( 


        <div>               
                <input 
                    name="name"
                    type="text"
                    placeholder="nome"
                />
                
                <input 
                    name="password"
                    type="password"
                    placeholder="senha"
                /> 
                
               <Link  to="/userpage" > <button>Login</button> </Link>
 
        </div>
         

        )
    };
    
                

    

