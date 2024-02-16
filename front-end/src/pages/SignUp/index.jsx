import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Brand } from '../../components/brand';

import { api } from "../../services/api";

import { Container, Form  } from "./style";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {   
    if(password.length <= 5){
      return alert("A senha deve ter no mínimo seis caracteres")
    }

    if(!name || !email || !password) {   
       return alert("Preencha todos os campos!")       
    }      

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else { 
        alert("Não foi possível cadastrar")
      }
    })

  }
    return(
        <Container>
          <div className="brand">
            <Brand
            title="food explorer"
            />
          </div>
            <Form>
                <div>
                <h2>Crie sua conta</h2>
                <div className="Input">
                <Input
                  title="Seu nome"
                  placeholder="Exemplo: Maria da Silva"
                  type="text"
                  onChange={e => setName(e.target.value)}
                />
                </div>
               
                <div className="Input">
                <Input
                  autoComplete="username"
                  title="Email"
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                  type="text"
                  onChange={e => setEmail(e.target.value)} 
                />
                </div>
               <div className="Input"> 
                <Input
                  title="Senha"
                  placeholder="No mínimo 6 caracteres"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  />
                </div>
                
                <Button 
                title="Entrar" 
                onClick={handleSignUp}               
                />
                <Link to="/">Já tenho uma conta</Link>
                </div>
            </Form>
        </Container>
    )
}