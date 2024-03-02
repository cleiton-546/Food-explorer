import { useState, useEffect,} from "react"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import {  Navigation } from 'swiper/modules';

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card } from "../../components/card"
import { SideMenu } from "../../components/sideMenu";

import { api } from "../../services/api"

import { Container, Nav} from "./style"
import { useNavigate } from "react-router-dom"
import img from "../../assets/mobileimg.png"
import imgDesktop from "../../assets/desktopImg.png"


export function Home( ) {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);
    const [menuIsOpen, setMenuIsOpen] = useState(false) 
    const [savedMealsCount, setSavedMealsCount] = useState(0)
    
    const navigate = useNavigate(); 
  
    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    function handleEdit(id) {
        navigate(`/edit/${id}`)
    }

    function handleSaveMealsCount(count) {
      setSavedMealsCount(prevCount => prevCount + count)
      
    }
   
    useEffect(() => {
      async function fetchMeals() {
        const response = await api.get(`/meals?title=${search}`);
        setMeals(response.data)
      }
      fetchMeals()
    }, [search ]);
   
    return (
     
    <Container >
       

        <SideMenu 
        onChange={(e) => setSearch(e.target.value)}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        /> 
        <Header 
        onChange={(e) => { 
          setSearch(e.target.value)
        }}
        mealsCount={savedMealsCount}
        onOpenMenu={() => setMenuIsOpen(true)}/>
        
        
        <main className="main" >
        <Nav>
            <div className="container">
              
              <div className="images">
               <img
                  className="desktop"
                  src={imgDesktop} alt="" />
                  
                 <img 
                 className="mobile"
                 src={img} alt="" />
                 </div>                    
                
                <div className="description">
                   <h2>Sabores inigualáveis</h2>
                   <p>Sinta o cuidado do preparo com ingredientes selecionados</p> 
                </div>
            </div>
        </Nav>
        <div className="section">
            <div className="gradient"> 
             <h2 className="meals">Refeições</h2>
               {
                meals.filter(meal => meal.category == "Refeição").length > 0 && 
                  <Swiper
                  grabCursor={true}
                  slidesPerView={3.5}
                  loop={true}
                   breakpoints={{
                      0: {
                       slidesPerView: 1,
                       spaceBetween: 10,
                     },
                     620: {
                       slidesPerView: 2,
                       spaceBetween: 10,
                     },
                      850: {
                       slidesPerView: 2,
                       spaceBetween: 10,
                     },
                     900: {
                      slidesPerView: 2,
                      spaceBetween: 10.
                     },
                     1170: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                     },

                     1350: {
                      slidesPerView: 3.5,
                      spaceBetween: 15
                     }
                   }}                 
                     navigation={true}                   
                     modules={[ Navigation ]}
                     className="mySwiper"     
                  >
                    {
                        meals.filter(meal => meal.category === "Refeição").map(meal => (
                        <SwiperSlide
                        className="swiperSlide"
                        key={String(meal.id)}
                        >
                            <Card
                            data={meal}
                            onClickDetails={handleDetails}
                            onClickEdit={handleEdit}
                            onClickCountMeals={handleSaveMealsCount}
                            />
                        </SwiperSlide>
                        ))
                    }
                  </Swiper>
               }

              <h2 className="meals">Sobremesas</h2>
              
               {               
                meals.filter(meal => meal.category == "Sobremesas").length > 0 && 
                  <Swiper
                     grabCursor={true}
                     slidesPerView={3.5}
                     loop={true}
                     breakpoints={{
                      0: {
                       slidesPerView: 1,
                       spaceBetween: 10,
                     },
                     620: {
                       slidesPerView: 2,
                       spaceBetween: 30,
                     },
                      850: {
                       slidesPerView: 2,
                       spaceBetween: 30,
                     },
                     900: {
                      slidesPerView: 2,
                      spaceBetween: 10.
                     },
                     1170: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                     },

                     1350: {
                      slidesPerView: 3.5,
                      spaceBetween: 15
                     }
                   }}                      
                    navigation={true}
                    modules={[ Navigation ]}
                    className="mySwiper"                  
                  >
                    {
                        meals.filter(meal => meal.category === "Sobremesas").map(meal  => (
                        <SwiperSlide
                        key={String(meal.id)}
                        className="swiperSlide"
                        >
                            <Card
                            data={meal}
                            onClickDetails={handleDetails}
                            onClickEdit={handleEdit}
                            onClickCountMeals={handleSaveMealsCount}
                            />
                        </SwiperSlide>
                        ))
                    }
                  </Swiper>
               }

                <h2 className="meals">Bebidas</h2>
                              
               {               
                meals.filter(meal => meal.category == "Bebidas").length > 0 && 
                  <Swiper
                  grabCursor={true}                
                  slidesPerView={3.5}
                  loop={true}
                   breakpoints={{
                      0: {
                       slidesPerView: 1,
                       spaceBetween: 10,
                     },
                     620: {
                       slidesPerView: 2,
                       spaceBetween: 30,
                     },
                      850: {
                       slidesPerView: 2,
                       spaceBetween: 30,
                     },
                     900: {
                      slidesPerView: 2,
                      spaceBetween: 10.
                     },
                     1170: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                     },

                     1350: {
                      slidesPerView: 3.5,
                      spaceBetween: 15
                     }
                   }}       
                    navigation={true}                    
                    modules={[Navigation]}
                    className="mySwiper"                  
                  
                  >
                    {
                        meals.filter(meal => meal.category === "Bebidas").map(meal  => (
                        <SwiperSlide
                        key={String(meal.id)}
                        >
                            <Card
                            data={meal}
                            onClickDetails={handleDetails}
                            onClickEdit={handleEdit}
                            onClickCountMeals={handleSaveMealsCount}
                            />
                        </SwiperSlide>
                        ))
                    }
                  </Swiper>
               }
            </div>
            </div>
        </main>    
        
        <Footer />
    </Container>
    ) 

} 