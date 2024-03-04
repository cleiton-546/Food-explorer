import { Container } from "./style";

import { GoPencil } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { Button } from "../button";
import { useContext, useState } from "react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Card({ data, onClickDetails, onClickEdit, onClickCountMeals,  ...rest})  {
    const { user } = useAuth();
   
    const [ isFavorite, setIsFavorite ] = useState(false) 
    const [ mealsCount, setMealsCount ] = useState(1);

   function handleCountMeals() {
        setMealsCount(prevCount => prevCount + 1);
    }
   
    function handleDeleteMeals() {
        if (mealsCount > 0)
            setMealsCount(prevCount => prevCount - 1);
    }       

    const imgURL = data.img? `${api.defaults.baseURL}/files/${data.img}` : "";

    function formatPrice(price) {
        const formattedPrice = parseFloat(price).toFixed(2);
        const priceWithComma = formattedPrice.replace(".", ",")
        return `$${priceWithComma}`;
    }
    
    function handleFavorite(){
        setIsFavorite(!isFavorite);
    }

    return(
        <Container {...rest}>
          
            <div className="Icons">
                {
                   user.role === USER_ROLE.ADMIN &&  
                 <>   
                   <GoPencil fontSize={25} className="edit" onClick={() => onClickEdit(data.id)}/>

                </>
                }
                {
                    user.role === USER_ROLE.CUSTOMER &&
                    <>
                      <FaRegHeart
                       fontSize={25}
                       className={isFavorite ? "favorite active" : "favorite"}
                       onClick={handleFavorite} 
                       
                       />    
                    </>
                }
                
            </div>
            
            <div className="Img" onClick={() => onClickDetails(data.id)}>
                <img src={imgURL} />
            </div>

            <h2 className="title">{data.title} <FaChevronRight fontSize={16}/> </h2>

            <p className="description">{data.description}</p>

            <p className="price" >{formatPrice(data.price)}</p>
            {  
              user.role === USER_ROLE.CUSTOMER &&
             <>
            <div className="add">
                <div className="Add">
                    <button onClick={handleDeleteMeals}>
                      <FaMinus fontSize={25}/>
                    </button>
                    <span>{mealsCount.toString().padStart(2, 0)}</span>
                    <button onClick={handleCountMeals}>
                        <FaPlus fontSize={25}/>
                    </button>
                </div>
                <div>
                </div >
                <div className="button">
                   <Button
                    title="incluir"
                    onClick={(e) => onClickCountMeals(mealsCount)} 
                   />
                </div>
            </div>
            </>
            } 
         
        </Container>
    )
}