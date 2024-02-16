import { BrowserRouter } from "react-router-dom"

import { USER_ROLE } from "../utils/roles";
import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { CustomerRoutes} from './customer.routes'
import { useEffect } from "react";

import { api } from "../services/api";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() =>  {
    api
      .get('/users/validated')
      .catch((error) => {
        if (error.response?.status === 401) {
          signOut()
        }
      }) 
  }, [])

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AppRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:  
        return <CustomerRoutes />;  
    };

  }
  
  return(  
      <BrowserRouter >  
         {user ? <AccessRoutes/> : <AuthRoutes/>}
      </BrowserRouter>
        
    )
}