import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import CardRecipeList from './CardRecipeList'
import {RecipeListContainer, AddRecipeButton} from './styled.js'
import { useNavigate } from 'react-router-dom'
import {goToCreateRecipe, goToRecipeDetails} from '../../routes/coordinator.js'

export default function RecipeList() {
  useProtectedPage()
  const url = 'https://cookenu-api.herokuapp.com/recipe/feed'
  const recipes = useRequestData([], url)
  const navigate = useNavigate()

  const onClickCard = (id) => {
    goToRecipeDetails(navigate, id)
  }
  
  const recipeCard = recipes.map((element) => {
    return <CardRecipeList
      key={element.recipe_id}
      title={element.title}
      image={element.image}
      onClick={() => onClickCard(element.recipe_id)}
    />
  })



  return (
    <RecipeListContainer>
      {recipeCard}
      <AddRecipeButton
        color={"primary"} 
        onClick={() => goToCreateRecipe(navigate)}
      >
        Add
      </AddRecipeButton>
    </RecipeListContainer>
  )
}
