import { Container  } from './style'

export function TextArea({value, title, placeholder, ...rest}) {
    return(
         <Container {...rest}>
            <h3>{title}</h3>
            <textarea placeholder={placeholder}>
                {value}
            </textarea>
        </Container>
    )
}