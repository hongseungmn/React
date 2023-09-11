import './App.css';

import Hello from './components/Hello';
import UseCallback_ from './useCallback_';
import UseContext_ from './useContext_';
import UseCustomHooks from './useCustomHook';
import UseEffect1 from './useEffect1';
import UseEffect2 from './useEffect2';
import UseMemo_ from './useMemo_';
import UseReducer1 from './useReducer1';
import UseReducer2 from './useReducer2';
import UserRef_ from './useRef_';
import UseState1 from './useState1';
import UseState2 from './useState2';
import UseState3 from './useState3';





function App() {

  console.log('App컴포넌트 렌더링:App()함수 호출');
  return <>
    <div className='container'>
      <h1 className="box">App(Import Style CSS)</h1>
      {/* <Hello/> */}
       
      <h2>useState훅 함수</h2>
      컴포넌트가 동일하더라도 state는 독립적이다
      {/* <UseState1/>
      <UseState1/> */}
      {/* <UseState2/> */}
      {/* <UseState3/> */}
      
      <h2>useEffect훅 함수</h2>
      <UseEffect1/>
      <UseEffect2/>
    {/*
      <h2>useRef훅 함수</h2>
  <UserRef_/>*/}
  {/*}
  <h2>useReducer훅 함수</h2>
  <UseReducer1/>
  <hr/>
    <UseReducer2/>*/} 
    {/*
    <h2>useContext훅 함수</h2>
  <UseContext_/>*/}
  {/*}
  <h2>useMemo훅 함수</h2>
<UseMemo_/>*/}
{/*}
<h2>useCallback훅 함수</h2>
<UseCallback_/>*/}
  {/* <h2>커스텀 훅 함수</h2>
  <UseCustomHooks/> */}
    </div>
  </>
}

export default App;
