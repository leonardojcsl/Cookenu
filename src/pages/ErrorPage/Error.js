import React from 'react'
import { ErrorPageContainer } from './styled'
import { ErrorImage } from './styled'
import erro from '../../Images/erro.png'


export default function Error() {
  return (
    <ErrorPageContainer>
      <ErrorImage src={erro} />
      <h1>Erro 404! Página não encontrada!</h1>
      </ErrorPageContainer>
  )
}
