import { PiListBold } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";

import { useNavigate } from "react-router-dom";

import { Brand } from "../brand"
import { Input } from "../input"
import { Button } from "../button"

import { Container, NewDish, Logout, Menu } from "./style"
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Header({ onOpenMenu  ,...props}) {
    const { user, signOut } = useAuth();

    const navigation = useNavigate();
    function handleSignOut() {
        navigation("/")
        signOut();
    }
   
    return(
    <Container>
      <Menu onClick={onOpenMenu}>
        <PiListBold />
      </Menu>
        
       
        <div className="brand">
            <Brand  
               title="food explorer"
               typeUser={user.role === USER_ROLE.CUSTOMER ? null : user.role}
            />
        </div>
        <div className="input">
           <IoSearch/>
            <Input 
             placeholder="Busque por pratos ou ingredientes"
             {...props}
            />
           
        </div>
        {    
          user.role === USER_ROLE.ADMIN &&
          <>
            <NewDish to="/new" >
              <Button       
                 title="Novo prato"   
              />      
            </NewDish>
          </>   
        }  

        {  
           user.role === USER_ROLE.CUSTOMER &&
            <>
            <div className="buttonRequest">
              <Button
                icon={PiReceipt}
                title="Pedidos"
                score={`(0)`}
              />
              <div className="receipt">
                <PiReceipt />
                <span>0</span>

              </div>
              
            </div>              
            </>
        }

            
        <Logout onClick={handleSignOut}>
            <GoSignOut />

        </Logout>
           
    </Container>
    )
}