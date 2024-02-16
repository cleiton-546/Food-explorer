import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Brand } from '../../components/brand'

import { Container, Form,  } from "./style";

export function SignIn() {
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password})
  }
    return(
        <Container>
          <div className="brand">
            <Brand
            title="food explorer"/>

          </div>
              
            <Form>
                <div>
                    <h2>Faça login</h2>
                    <div className="input">
                      <Input
                      title="Email"
                      placeholder="Exemplo: exemplo@exemplo.com.br"
                      type="text"
                      onChange={ e => setEmail(e.target.value)}
                    />
                    <Input
                      title="Senha"
                      placeholder="No mínimo 6 caracteres"
                      type="password"
                      onChange={ e => setPassword(e.target.value)}

                    />
                    </div>
                    
                    <Button 
                    onClick={handleSignIn}
                    title="Entrar"                
                    />
                    <Link to="/register">Criar uma conta</Link>
                </div>
            </Form>


        </Container>
    )
}