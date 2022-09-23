import React from 'react'
import { ButtonDiv, InputsDiv, LogoImage, MainDiv } from './styled'
import logo from '../../Images/logo.png'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import {goToSignUp} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {login} from '../../services/user'
import useUnprotectedPage from '../../hooks/useUnprotectedpage'

export default function Login({setLoginButtonText}) {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const navigate = useNavigate()


  const onSubmitForm = (event) => {
    event.preventDefault() 
    login(form, clear, navigate, setLoginButtonText)   
  } 

  return (
    <MainDiv>
      <LogoImage src={logo} />
      <InputsDiv>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Entrar
          </Button>
        </form>
      </InputsDiv>
      <ButtonDiv>
        <Button
          onClick={() => goToSignUp(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Cadastre-se Aqui!
        </Button>
      </ButtonDiv>
    </MainDiv>
  )
}
