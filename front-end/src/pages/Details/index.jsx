import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";

import { Container } from "./style" 

import { api } from "../../services/api"

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Back } from "../../components/back"
import { Ingredient } from "../../components/ingredient"
import { Button } from "../../components/button"
import { SideMenu } from "../../components/sideMenu";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { MealsContext } from "../../context/MealsContext";

export function Details() {
    const { user } = useAuth();
    const {  numberOfMeals } = useContext(MealsContext)

    const [data, setData] = useState(null)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [mealsCount, setMealsCount] = useState(1);

    const params = useParams()
    const navigate = useNavigate()
    
    const imgURL = data && `${api.defaults.baseURL}/files/${data.img}`

    function handleBack() {
        navigate(-1)
    }

    function handleEdit() {
        navigate(`/edit/${data.id}`)
    }
      
    function handleCountMeals() {
        setMealsCount(prevCount => prevCount + 1);
    }
   
    function handleDeleteMeals() {
        if (mealsCount > 0)
            setMealsCount(prevCount => prevCount - 1);
    }       
    
    function formatPrice(price) {
         
        const formattedPrice = parseFloat(price).toFixed(2);

        const priceWithComma = formattedPrice.replace(".", ",")

        return `R$ ${priceWithComma}`;
    }    
  
    useEffect(() => { 
      async function fetchNote() {
        const response = await api.get(`/meals/${params.id}`);
        setData(response.data);
        
      }
      fetchNote()  
    }, [] );  
      
    return(
        <Container>
        <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        /> 
        <Header onOpenMenu={() => setMenuIsOpen(true)}
        /> 
            { 
            data&&
            <main>
                <Back 
                onClick={handleBack}
                />
                
                <div className="container">
                    <img src={imgURL}  alt="" />
                    
                    <div className="content">
                        <h2>{data.title}</h2>
                        <h4>{data.description}</h4>
                        { data.ingredients&&
                        <div className="ingredients">
                            {
                             data.ingredients.map(ingredient => (
                                <Ingredient
                                key={String(ingredient.id)}
                                title={ingredient.name}
                                />

                             ))   
                            }
                        </div>
                        }
                        {
                            user.role === USER_ROLE.ADMIN &&
                            <>
                             <div className="button">
                               <Button
                                 onClick={handleEdit}
                                 title="Editar prato"/>
                             </div>
                            </>
                        }
                        {
                            user.role === USER_ROLE.CUSTOMER &&
                            <>
                              <div className="add">
                                <div className="Add">
                                   <button onClick={handleDeleteMeals}>  
                                      <FaMinus fontSize={15}/>
                                   </button>
                                      <span>{mealsCount}</span>
                                    <button onClick={handleCountMeals}>
                                      <FaPlus fontSize={15}/>
                                    </button>                                                          
                                </div>
                                  <Button
                                   className="includes"
                                   icon={PiReceipt}
                                   onClick={(e) => numberOfMeals(mealsCount)} 
                                   title={ `  Incluir    \u2219    ${formatPrice(data.price)}`}
                                  />
                              </div>

                            </>
                        }

                    </div>
                </div>     

            </main>
            }
            <Footer/>
        </Container>
    )
}