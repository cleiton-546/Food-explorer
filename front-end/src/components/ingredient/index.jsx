import { Container } from "./style";

export function Ingredient({ title, ...rest }) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    );
}        