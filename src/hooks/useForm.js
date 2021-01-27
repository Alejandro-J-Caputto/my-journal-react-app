import { useState } from "react"


export const useForm = (initialState={}) => {
  

  const [values, setValues] = useState(initialState)
  const handleInputChange = ({target}) => {
    // console.log(target.value)
    setValues({
      ...values,
      [target.name]: target.value
    }
      // ...values,
    )
  }
  const reset = (newFormState= initialState) => {
    setValues(newFormState)
  }

  
return [values, handleInputChange, reset]

}
