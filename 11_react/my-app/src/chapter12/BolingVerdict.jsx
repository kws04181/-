// 사용자가 입력한 온도가 물이 끊기에 충분하지 여부를 출력
function BolingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓을걸?</p>
  }
  return <p>물이 안끓을걸?</p>
}

export default BolingVerdict;