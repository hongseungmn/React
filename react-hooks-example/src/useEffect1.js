import { useEffect, useState } from "react";
import { dataFetch } from "./useState3";

export default function UseEffect1(){
    
    //카운터용 state
    const [counter,setCounter] = useState(0);
    //입력값용 state -useEffect()훅 테스트용
    const [ username,setUsername] =useState('');

    //기본적으로 useEffect훅 함수의 인자인 콜백함수는 컴포넌트가 
    //렌더링 된 직후(즉 컴포넌트가 마운트 된 후) 호출된다
    //모든 state나 props가 업데이트 된 후에도 콜백함수 호출된다
    //componentDidMount()  + componentDidUpdate()  라이프 사이클 함수와 동일
    /*
    useEffect(()=>{
        
        console.log('useEffect 훅 함수 형식1:마운트 된 후 + counter혹은 username 스테이트 업데이트 후');
        dataFetch();
        //콜백함수에서는 state를 변경해서는 안된다-무한루프(브라우저 다운될 수도 있다)
        //setCounter(counter+1);
    });*/
    //형식2:마운트 된후  + 의존성 배열 [state]
    //의존성 배열 요소인 state가 업데이트 될때 콜백함수 호출됨.
    /*
   
    useEffect(()=>{
        //username스테이트 변경될때는 호출되지 않는다
        console.log('useEffect 훅 함수 형식2:마운트 된 후 + counter 스테이트 업데이트 후만');    
        dataFetch();
    },[counter]);//의존성 배열의 요소로는 STATE나 PROPS를 요소로 그래야 콜백함수가 의존한다
    */
    //형식3:최초 마운트된 후 딱 한번만 호출된다.(이후 스테이트나 프랍스가 변경되도  즉 리렌더링이 일어나도 호출되지 않는다)
    useEffect(()=>{
        console.log('useEffect 훅 함수 형식3:마운트 된 후만');    
        dataFetch();
    },[]);


    //버튼의 이벤트 처리용
    const handleIncrease = ()=>{       
        setCounter(prevState=>prevState+1);
    };
    const handleDecrease = ()=>{       
        
        setCounter(prevState=>prevState-1);
    };
   
    console.log('렌더링이 일어 났어요:',username);
    return <>
        <h4>Counter : {counter}</h4>
        <button className="btn btn-info" onClick={handleIncrease}>+</button>
        <button className="btn btn-info ml-2" onClick={handleDecrease}>-</button>
        <div className="form-group">
            <label>이름:</label>
            {/* 리액트에서 폼의 입력 필드에 value속성을 추가하면 그 필드는 무조건 readOnly
                필드가 된다
                onChange리스너를 부착해서 필드의 값을 state로 변경해야 한다
            */}
            <input type="text" className="form-control" value={username}  onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
    </>
}