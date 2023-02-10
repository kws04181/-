import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useState, useCallback } from 'react';

function App() {
  // 현재 선택한 category 상태 관리
  const [category, setCategory] = useState('all');

  const handleSelect = useCallback((categoryValue) => {
    setCategory(categoryValue);
  }, []);

  return (
    <>
      <Categories category={category} onSelect={handleSelect} />
      <NewsList />
    </>
  );
}

export default App;
