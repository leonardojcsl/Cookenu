import React from 'react'
import { ButtonDiv, InputsDiv, LogoImage, MainDiv } from './styled'
import logo from '../../Images/logo.png'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedpage'
import { goToRecipesList } from '../../routes/coordinator'

export default function SignUp({setLoginButtonText}) {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({name: "", email: "", password: "" })
  const navigate = useNavigate()
  
  const onSubmitSignUp = (event) => {
    event.preventDefault()  
    const url = `https://cookenu-api.herokuapp.com/user/signup`
      axios.post(url, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert("Usuário Cadastrado com Sucesso!")
        clear()
        goToRecipesList(navigate)
        setLoginButtonText("Logout")
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  return (
    <MainDiv>
      <LogoImage src={logo} />
      <InputsDiv>
        <form onSubmit={onSubmitSignUp}>
        <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome Completo"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required            
          />
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
            Efetuar Cadastro!
          </Button>
        </form>
      </InputsDiv>
    </MainDiv>
  )
}
