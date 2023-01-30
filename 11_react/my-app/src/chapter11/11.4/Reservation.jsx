import { useState } from "react";

function Reservation() {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언하기

  const [breakfast, setBreackfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  const handleBreackfastChange = (e) => {
    setBreackfast(e.target.checked);
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value)
  };

  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}`);
  };

  return (
    <>
      <label>
        조식 여부:
        <input
          type="checkbox"
          // checked 속성은 checkbox & radio 타입에 존재하고 boolean 타입의 값
          checked={breakfast}
          onChange={handleBreackfastChange}
        />
      </label>
      <br />
      <br />
      <label>
        투숙객 수:
        <input
          type="number"
          value={numberOfGuests}
          onChange={handleGuestsChange}
        />
      </label>
      <button
        type="button"
        onClick={handleSubmit}>
        제출
      </button>
    </>
  );
}

export default Reservation;