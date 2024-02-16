import { Container } from "./style"

export function Button({ icon: Icon, title, score, ...rest}) {
    return (
        <Container 
        type="button"
        {...rest}
        >
            
             {Icon && <Icon />}
            {title}
            <span>{score}</span>
        </Container>
    )
}