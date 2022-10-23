import React, {useState} from "react";

const useForm = (validatedInput) => {

  const [inputName, setInputName] = useState(" ");
  const [touchedInputName, setTouchedInputName] = useState(false);
  
  const changeInputHandler = (e) => {
    setInputName(e.target.value)
  }

  const reset = () => {
       setInputName(" ");
  }

  const blurInputHandler = () => {
    setTouchedInputName(true)
  }
  

  validatedInput(inputName);

  return {
    inputName,
    touchedInputName,
    validatedInput,
    changeInputHandler,
    blurInputHandler,
    setInputName
  }
}

export default useForm;
  