import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import {goToRecipesList, goToLogin} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom';

export default function Header({loginButtonText, setLoginButtonText}) {  
  const token = localStorage.getItem('token') 
  const navigate = useNavigate()
  

  const logout = () => {
    localStorage.removeItem('token')
  }
  
  const loginButtonAction = () => {
      if(token){
        logout()
        setLoginButtonText("Login")
        goToLogin(navigate)
      } else {
        goToLogin(navigate)
      }
  }

  return (    
      <AppBar position="static">
        <StyledToolbar>          
          <Button onClick={() => goToRecipesList(navigate)} color="inherit">CookeNu</Button>
          <Button onClick={loginButtonAction} color="inherit">{loginButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    
  )
}