import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function CreateRecipe() {
  useProtectedPage()
  return (
    <div>
        <h1>Create Recipe</h1>
    </div>
  )
}
