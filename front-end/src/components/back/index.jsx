import { FaChevronLeft } from "react-icons/fa";

import { Container } from "./style"

export function Back({ ...rest}) {
    return(
        <Container {...rest}>
            <FaChevronLeft size={21}/>
            <h2>voltar</h2>

        </Container>
    )
}