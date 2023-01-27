import { useState } from "react";

function FlavorForm() {
  const [value, setValue] = useState('coconut');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`좋아하는 과일은 ${value}`);
  };

  return (
    <>
      <label>
        좋아하는 맛 선택:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut">코코넛</option>
          <option value="mango">망고</option>
        </select>
      </label>
      <button type="button" onClick={handleSubmit}>제출</button>
    </>
  );
}

export default FlavorForm;