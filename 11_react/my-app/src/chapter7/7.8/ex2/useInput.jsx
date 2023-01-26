import { useState } from "react";

function useInput(initialvalue) {
  const [inputValue, setinputValue] = useState(initialvalue);

  const handleChange = (e) => {
    setinputValue(e.target.value);
  }

  // const handleSubmit = () => {
  //   alert(inputValue);
  //   setInputValue('');
  // };

  const reset = () => {
    setinputValue('');
  }

  // return [inputValue, handleChange, handleSubmit];
  return [inputValue, handleChange, reset];

}

export default useInput;