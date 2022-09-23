import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import useRequestData from '../../hooks/useRequestData'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Imagem} from './styled'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RecipeDetails() {
  useProtectedPage()
  const params = useParams()
  const recipe = useRequestData([], `https://cookenu-api.herokuapp.com/recipe/${params.id}`)
  console.log(recipe)
  const token = localStorage.getItem('token')

  const showDetails = recipe.map((element) => {
    console.log(element)
    return (
      <div>
        <Imagem src={element.image} />
        <p>{element.title}</p>
        <p>{element.description}</p>
      </div>
    )
  })

  return (
    <div>
      {/* <h1>Recipe Details</h1>
      {showDetails} */}
      <Grid Grid container spacing={2}>
        {/* <Grid item xs={4} /> */}
        <Grid item xs={12}>
          <Item>{showDetails}</Item>
        </Grid>
        {/* <Grid item xs={4} /> */}
      </Grid>
    </div>
  )
}
