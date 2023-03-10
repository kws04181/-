import { useState } from "react";

function ConfirmButton() {

  const check = 'ํ์ธ๋จ';

  const [isConfirmed, setisConfirmed] = useState(0);

  const handleConfirm = () => {
    setisConfirmed(isConfirmed => !isConfirmed);
  }

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? check : '๐ ๐'}
    </button>
  );
}

export default ConfirmButton;

// Quiz: ๋ฒํผ์ ๋๋ฅด๋ฉด 'ํ์ธํ๊ธฐ'๊ฐ 'ํ์ธ๋จ'์ผ๋ก ๋ณ๊ฒฝ๋๋ฉด์ ๋ฒํผ ๋นํ์ฑํ ์ฒ๋ฆฌ ํด๋ณด๊ธฐ
// ๋ฌด์์ ํด์ผํ ๊น
// isConfirmed ๋ผ๋ state ๋ง๋ค๊ธฐ
// ๋ฒํผ์ ํด๋ฆญํ๋ฉด isConfirmed ์ํ๋ฅผ ๋ฐ๊พธ๋ handleConfirm() ์ด๋ฒคํธ ํธ๋ค๋ฌ(ํจ์) ๋ง๋ค๊ธฐ
// ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ผ๋ก ๋ฒํผ์ ๋ด์ฉ ์์ ํ๊ธฐ
// disabled ์์ฑ ์ด์ฉํด์ ๋ฒํผ ๋นํ์ฑํ