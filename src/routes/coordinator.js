export const goToLogin = (navigate) => {
    navigate("/login")
}
export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}
export const goToRecipesList = (navigate) => {
    navigate("/")
}
export const goToCreateRecipe = (navigate) => {
    navigate("/criar")
}
export const goToRecipeDetails = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}
