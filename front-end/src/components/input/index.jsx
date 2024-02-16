

import { Container } from "./style";

 
export function Input({ icon: Icon, list, title, useDatalist,  ...rest  }) {
    return(
        <Container>
            <h3>{title}</h3>
            {Icon && <Icon size={30}/>}
              <input
                {...rest}
                list={useDatalist ? list : undefined}
               
              /> 
              {useDatalist && (
                <datalist id={list}>              
                   <option value="Refeição"/>                        
                   <option value="Sobremesas"/>          
                   <option value="Bebidas"/>          
                </datalist>              
             )}         
        </Container>
    )
}