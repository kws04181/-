import { createContext } from "react";

const ThemeContext = createContext('light');
// 리액트 개발자 도구에서 보여질 컨텍스트 이름 설정
ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;