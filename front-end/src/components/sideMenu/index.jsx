 import { IoSearch } from "react-icons/io5";
 import { IoMdClose } from "react-icons/io";

 import { useNavigate } from "react-router-dom";
 import { useAuth } from "../../hooks/auth";

 import { Input } from "../input"
 import { Footer } from "../footer"

 import { Container, NewDish } from "./styles"
import { USER_ROLE } from "../../utils/roles";


export function SideMenu({ menuIsOpen, onCloseMenu, ...props}) {
   const { user, signOut } = useAuth();

    const navigation = useNavigate();
    function handleSignOut() {
        navigation("/")
        signOut();
    }    

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <header>
                <button><IoMdClose size={30} onClick={onCloseMenu} /> Menu </button>
            </header>

           <main>
            <div className="input">
             <IoSearch size={25}/>
              <Input 
               placeholder="Busque por pratos ou ingredientes"
               {...props}
              />
          </div> 
          
          <div className="button">
            {
                user.role === USER_ROLE.ADMIN &&
                <>
                  <NewDish to="/new">Novo prato</NewDish>
                </>
            }
            <button onClick={handleSignOut}>Sair</button>          
          </div>
            
           </main>

         <Footer/>
        </Container>
    )
}