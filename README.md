# Food Explorer

## Introdução
O Food Explorer é uma aplicação web desenvolvida para simular um menu interativo para um restaurante fictício. A aplicação conta com duas personas principais: o admin e o usuário.

- **Admin**: Responsável pelo restaurante, pode criar, visualizar, editar e apagar pratos a qualquer momento.
- **Usuário**: Visualiza todos os pratos cadastrados e pode ver informações detalhadas sobre cada prato.

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js, Express.js


## Funcionalidades

### Admin
- **Criar Prato**: O admin pode adicionar novos pratos, incluindo uma imagem, nome, categoria, descrição, ingredientes e preço.
- **Visualizar Pratos**: O admin pode visualizar todos os pratos cadastrados.
- **Editar Prato**: O admin pode editar informações de pratos existentes.
- **Apagar Prato**: O admin pode remover pratos do sistema.

### Usuário
- **Visualizar Pratos**: O usuário pode visualizar todos os pratos cadastrados.
- **Ver Detalhes do Prato**: O usuário pode clicar em um prato para ver informações detalhadas sobre ele.

## Layout
O layout da aplicação foi desenvolvido com base no design disponibilizado no [Figma](https://www.figma.com/community/file/1196874589259687769/food-explorer-v2).  


## Aplicação ao Vivo
Você pode acessar a aplicação ao vivo [aqui](https://food-explorer-120.netlify.app/).

## Executando o Projeto
1. Clone o repositório do projeto: `git clone https://github.com/seu-usuario/food-explorer.git`
2. Instale as dependências do frontend: `cd food-explorer/frontend && npm install`
3. Instale as dependências do backend: `cd ../backend && npm install`
4. Inicie o servidor backend: `npm run dev` dentro do diretório `backend`.
5. Inicie o servidor frontend: `npm run dev` dentro do diretório `frontend`.

## Estrutura do Projeto
- `frontend/`: Contém os arquivos do frontend da aplicação.
- `backend/`: Contém os arquivos do backend da aplicação, incluindo rotas, modelos e controladores.
- `README.md`: Documentação do projeto.