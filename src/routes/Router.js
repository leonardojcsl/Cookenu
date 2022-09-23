import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/Login'
import SignUpPage from '../pages/SignUpPage/SignUp'
import RecipesListPage from '../pages/RecipesListPage/RecipeList'
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetails'
import CreateRecipePage from '../pages/CreateRecipePage/CreateRecipe'
import ErrorPage from '../pages/ErrorPage/Error'



export default function Router({setLoginButtonText}) {
  return (    
      <Routes>
        <Route path="/login" element={<LoginPage setLoginButtonText={setLoginButtonText}/>} />
        <Route path="/cadastro" element={<SignUpPage setLoginButtonText={setLoginButtonText}/>} />
        <Route path="/" element={<RecipesListPage />} />
        <Route path="/criar" element={<CreateRecipePage />} />
        <Route path="/detalhes/:id" element={<RecipeDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>    
  )
}
