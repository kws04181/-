function NumberList(props) {
  const { numbers } = props;

  const listItem = numbers.map((num, index) => {
    return <li key={index}>{num}</li>;
  });
  // map() 함수 결과

  return (
    <ul>{listItem}</ul>
  );
}

export default NumberList;