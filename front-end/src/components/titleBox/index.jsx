import { Container } from './style';


export function TitleBox({title, children}) {
    return (
        <Container>
            <h3>{title}</h3>
            {children}
        </Container>
    );
}