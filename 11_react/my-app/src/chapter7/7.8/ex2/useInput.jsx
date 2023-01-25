import { useState } from "react";

function useInput(initialvalue) {
  const [inputValue, setinputValue] = useState(initialvalue);

  const handleChange = (e) => {
    setinputValue(e.target.value);
  }

  return [inputValue, handleChange];

}

export default useInput;