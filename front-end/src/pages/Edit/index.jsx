import { useState, useEffect  } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {BsUpload } from "react-icons/bs"

import { api } from "../../services/api";

import { Header } from "../../components/header"
import { Back } from "../../components/back"
import { Input } from "../../components/input"
import { IngredientNew } from "../../components/ingredientNew";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { TitleBox } from "../../components/titleBox";
import { SideMenu } from "../../components/sideMenu";

import { Container } from './style';

import { setDate } from "date-fns";

export function Edit() {
 const params = useParams();

  const [save, setSave] = useState(false)
 
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false)  

  const [data, setData] = useState(null);

  const imgURL = data && `${api.defaults.baseURL}/files/${data.img}`
  const [img, setImg] = useState(imgURL);
  const [imgFile, setImgFile ] = useState(null)

 

  function handleChangeImg(event) {
    const file = event.target.files[0];
    setImgFile(file);

    const imgPreview = URL.createObjectURL(file);
    setImg(imgPreview);
  }
  
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

  async function handleUpdateMeal() {
    if(!img) {
      return alert("Selecione a foto do prato!")
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
    formData.append("img", imgFile);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    ingredients.map(ingredients => {
      formData.append("ingredients", ingredients)
    })

    await api
     .put(`/meals/${params.id}`, formData)
     .then(alert("Prato atualizado!"), navigate("/"))
     .catch((error) => {
      if (error.response) {
         alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato! ")
      } 
     });

     setSave(true);
       
    }    
    
    useEffect(() => {
      async function fetchMeals() {
        const response = await api.get(`/meals/${params.id}`);
        setData(response.data);

        const { title, category, price, description, ingredients } = response.data;
        setTitle(title);
        setCategory(category);
        setPrice(price);
        setDescription(description);
        setIngredients(ingredients.map(Ingredient => Ingredient.name)); 
      }

      fetchMeals();
    }, [])

    async function handleRemoveMeals() {
      const confirm = window.confirm("Deseja realmente excluir o prato? ")

      if(confirm) {
        await api.delete(`/meals/${params.id}`);
        navigate(-1)
      }
    }

    useEffect(() => {    
      async function fetchMealDelete() {
        const response = await api.get(`/notes/${params.id}`);
        setDate(response.data);
      }
      fetchMealDelete();
    }, []);


    return(
        <Container>
       <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        /> 
        <Header
          onOpenMenu={() => setMenuIsOpen(true)}
          onChange={(e) => setSearch(e.target.value)}
        />          

          { data &&  
            <main>
            <Back
            onClick={handleBack}
            />

            <h2 className="add">Editar prato</h2>
            
             
            <div className="name">
                <div className="inputImg">
                  <h3>Imagem do prato</h3>
                    
                    <input 
                    type="file" 
                    id="img"
                    name="img"
                    onChange={handleChangeImg} 
                    />
                    <label htmlFor="img">
                      <span><BsUpload size={30}/></span> 
                      <span>Selecione a imagem</span>
                  </label>
                </div>                
                <Input
                className="center"
                title="Nome"
                placeholder="Ex: Salada Ceasar"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <div className="left">
                <Input
                title="Categoria"
                useDatalist
                list="food"
                onChange={e => setCategory(e.target.value)}
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
                    <Input placeholder="R$ 00,00"
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    />.
                </TitleBox>                   
              </div>       
            </div>
            <TextArea
             title="Descrição"
             value={description}
             onChange={e => setDescription(e.target.value)}
            />
            <div className="button">
                <Button 
                title="Excluir prato"
                onClick={handleRemoveMeals}
                />
                <Button
                title="Salvar alterações"
                onClick={handleUpdateMeal}
                />
            </div>
           
            </main> 
              
          }
            <Footer/>
        </Container>
            
    )
}