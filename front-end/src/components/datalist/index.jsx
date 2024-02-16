import { Container } from "./style";

export function Datalist({title,  ...rest}) {
    return (
        <Container>
            <label for=""></label>
            <datalist>
                <option value="Refeição"/>                        
                <option value="Sobremesas"/>          
                <option value="Bebidas"/>          
            </datalist>              
        </Container>
    )
}