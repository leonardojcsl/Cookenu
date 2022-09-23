import axios from 'axios'
import { goToRecipesList } from '../routes/coordinator'

export const login = (body, clear, navigate, setLoginButtonText) => {
    const url = `https://cookenu-api.herokuapp.com/user/login`
    axios.post(url, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)      
      clear()
      goToRecipesList(navigate)
      setLoginButtonText("Logout")

    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  

  