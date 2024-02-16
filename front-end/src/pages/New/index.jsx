import { useState  } from "react"
import { useNavigate } from "react-router-dom";
import {BsUpload } from "react-icons/bs";

import { api } from '../../services/api'

import { Header } from "../../components/header"
import { Back } from "../../components/back"
import { Input } from "../../components/input"
import { IngredientNew } from "../../components/ingredientNew";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { TitleBox } from "../../components/titleBox";
import { SideMenu } from "../../components/sideMenu";

import { Container  } from './style'

export function New() {
  const [save, setSave] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false) 


  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [img, setImg] = useState(null);
  
  const navigate = useNavigate();

  
  function handleBack() {
    navigate(-1)
  }
  
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>  prevState.filter(Ingredient => Ingredient !== deleted))

  }

  async function handleNewMeal() {
    if(!img) {
      return alert("Adicione a imagem do prato!")
    }

    if(!title) {
      return alert("Digite o nome do prato!")
    }

    if(!category) {
    return alert('Selecione a categoria do prato!')
    }

    if(newIngredient) {
      return alert("Você deixou um ingrediente na campo para adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    if(!price) {
      return alert("Digite o preço do prato!")
    }

    if(!description) {
      return alert("Selecione a descrição do prato!")
    }

    setSave(true)
   
 
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    
    ingredients.map(ingredients => {
      formData.append("ingredients", ingredients)
    })

    
    await api
     .post("/meals", formData
     )
     .then(alert("Prato adicionado!"), handleBack())
     .catch((error) => {
      if (error.response) {
         alert(error.response.data.message);
      } else {
        alert("Não foi possível criar o prato ")
      } 
     });

     setSave(false)

     
   
  }
    return(
        <Container>
          
          <SideMenu 
            menuIsOpen={menuIsOpen}
            onCloseMenu={() => setMenuIsOpen(false)}
          /> 
          <Header onOpenMenu={() => setMenuIsOpen(true)}/>          
            <main>
            <Back
            onClick={handleBack}
            />

            <h2 className="add">Adicionar prato</h2>

            <div className="name">
                
                <div className="inputImg">
                  <h3>Imagem do prato</h3>
                  
                    <input 
                    type="file" 
                    id="img"
                    onChange={e => setImg(e.target.files[0])} 
                    />
                    <label htmlFor="img">
                      <span><BsUpload size={30}/></span> 
                      <span>Selecione a imagem</span>
                  </label>
                </div>

                <Input
                title="Nome"
                placeholder="Ex: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
                
                />

                <div className="left">
                <Input
                title="Categoria"
                onChange={e => setCategory(e.target.value)}
                useDatalist={true}
                list="food"
                />
                </div>

            </div>
            <div className="section">
              <TitleBox title="Ingredientes">  
                <div className="ingredient">
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientNew
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                    <IngredientNew   
                      isNew
                      placeholder="Adicionar"
                      onChange={e => setNewIngredient(e.target.value)}
                      value={newIngredient}
                      onClick={handleAddIngredient}
                    />
                </div>    
              </TitleBox>
            
              <div className="value">
                <TitleBox title="Preço">
                    <Input 
                    placeholder="R$ 00,00"
                    type="number"
                    onChange={e => setPrice(e.target.value)}
                    />
                </TitleBox>                   
              </div>       
            </div>
            <TextArea
             title="Descrição"
             placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
             onChange={e => setDescription(e.target.value)}
            />

            <div className="button">
                <Button
                title="Salvar alterações"
                onClick={handleNewMeal}
                />
            </div>
            </main>
            <Footer/>
        </Container>
    )
}

