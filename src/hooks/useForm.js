// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {

  const [values, setValues] = useState(initialValues);
  const handleChanges = (event) => {
    console.log("the event:", event);
    setValues({...values, [event.target.name]: event.target.value});
  };
  return [values, handleChanges]
}

export default useForm;