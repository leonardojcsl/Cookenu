import React, { useState } from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './constants/theme'
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";


function App() {
  const token = localStorage.getItem('token')
  const [loginButtonText, setLoginButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header loginButtonText={loginButtonText} setLoginButtonText={setLoginButtonText} />
        <Router setLoginButtonText={setLoginButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
