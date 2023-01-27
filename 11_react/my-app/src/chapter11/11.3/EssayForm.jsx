import { useState } from "react";

function EssayForm() {
  const [value, setValue] = useState('좋아하는 것에대한 에세이를 작성하세요');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`제출된 에세이 : ${value}`);
  };

  return (
    <>
      <label>
        Essay<br />
        <textarea value={value} onChange={handleChange} />
        {/* HTML DOM 요소에서는 텍스트를 자식으로 정의했지만
      React에서는 value 속성을 사용 */}
        {/* <textarea>
        Hello, Hi~
      </textarea> */}
      </label><br />
      <button type="button" onClick={handleSubmit}>
        제출
      </button>
    </>
  );
}

export default EssayForm;