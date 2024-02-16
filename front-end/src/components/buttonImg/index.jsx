
import { Container } from "./style";

export function ButtonImg({title, onChange, ...rest}) {
    const handleFile =  (event) => {
        const file = event.target.files[0];
        onChange(file);
    }
        return(
        <Container {...rest}>
            <h3>{title}</h3>
            <input type="file" id="img"  onChange={handleFile} />
                <label htmlFor="img">           
                   <span><BsUpload size={30}/></span>
                   <span>Selecione a imagem</span>
            </label>         
        </Container>
    )
}