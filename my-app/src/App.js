import logo from './logo.svg';
import './App.css';
import MyButton from './component/MyButton';
import Profile from './component/Profile';
import ShoppingList from './component/ShoppingList';
import { useState } from 'react';
import MyButton2 from './component/MyButton2';


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        {/* 버튼을 재사용해서 사용할 수 있는데 이때 useState는 개별적으로 동작한다 */}
        <MyButton/>
        <MyButton/>
        <br/>
        {/* 만약 데이터를 공유하고 싶으면 해당 부모의 컴포넌트에서 useState를 통해 내려준다 */}
        <MyButton2 count={count} onClick={handleClick}/>
        <MyButton2 count={count} onClick={handleClick}/>
        <Profile/>
        <ShoppingList/>
      </div>
    </>
  );
}



export default App;

