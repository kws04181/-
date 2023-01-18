function Layout(props) {
  return (
    <>
      {props.header}
      레이아웃 크기는 가로 {props.width}, 세로{props.height}입니다.
      {props.footer}
    </>
  );
}

export default Layout;