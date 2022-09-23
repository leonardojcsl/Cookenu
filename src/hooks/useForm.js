import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)


const inputChange = (event) => {
    const {value, name} = event.target
    setForm({...form, [name]: value})
}

const clear = () => { 
    setForm(initialState)
}

return [form, inputChange, clear]

}

export default useForm