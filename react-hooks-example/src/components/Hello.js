/*
어떤거를 컴포넌트로 만들것인가?
1.반복되는 UI
2.데이타가 변경되는 UI
*/

import { useEffect } from "react";
import "./Hello.css";//전역 스타일
import styles from "./Hello.module.css";//현재 컴포넌트에만 적용되는 스타일




function Hello(){
    
    console.log('Hello컴포넌트 렌더링:Hello()함수 호출');

    const number=10;
    const string='문자열';
     //JSX에서는 boolean,null,undefined는 아무것도 출력되지 않는다
    const bool=true;
    const null_ = null;
    const undefined_ = undefined;
    //Objects are not valid as a React child (found: object with keys {name}). If you meant to render a collection of children, use an array instead.
    //리액트 엘리먼트의 자식으로 객체(object) 불가(대신 배열 사용)
    const object={name:'코스모'};
    const array = [1,'한소인',2];
    const day = new Date();

    function onHandleClick1(e){//e는 클릭 이벤트 객체
        //hook함수 호출 불가(함수안의 함수임으로)
        console.log('버튼 클릭 1');
        console.log(e.target);
    }
    function onHandleClick2(e){//e는 클릭 이벤트 객체
        //hook함수 호출 불가(함수안의 함수임으로)
        console.log('버튼 클릭 2');
        console.log(e.target);
    }


    return <>
        <h1 style={{color:"#FF0000",backgroundColor:'yellow',opacity:0.5}}>Hello React!!!(Inline Style CSS적용)</h1>
        <h1 className="box">Hello React!!!(Import Style CSS적용-컴포넌트명.css)</h1>
        <h1 className={styles.box}>Hello React!!!(Import Style CSS적용-컴포넌트명.module.css)</h1>
        <h2>JSX안에서 변수 사용</h2>
        <ul>
            <li>숫자:{number}</li>
            <li>문자열:{string}</li>
            <li>불린:{bool}</li>
            <li>null:{null_ }</li>
            <li>undefined:{undefined_}</li>
            {/*<li>리터럴 객체:{object}</li>*/}
            <li>리터럴 배열(map()함수 미 적용):{array}</li>
            {/* 
            Warning: Each child in a list should have a unique "key" prop.
            Check the render method of `Hello`. See https://reactjs.org/link/warning-keys for more information.
             자식 컴포넌트<p>를 반복하려면 반드시 자식 컴포넌트 <p>에
             key속성으로 유니크한 값을 지정해야 한다
            
            */}
            <li>리터럴 배열(map()함수 적용):{array.map((element,index)=><p key={index}>{element}</p>)}</li>
            {/*<li>날짜객체:{day}</li>*/}
            <li>날짜객체:{`${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`}</li>
        </ul>
        <h2>JSX의 이벤트 처리 방법</h2>
        <h4>방법1:함수 정의,요소의 onClick={/*{함수명만}*/}</h4>
        <button className="btn btn-danger" onClick={onHandleClick1}>클릭이벤트 1</button>
        <h4>방법2:함수 정의,요소의 onClick={/*(e)=>정의한 함수 호출*/}</h4>
        <button className="btn btn-info" onClick={e=>onHandleClick2(e)}>클릭이벤트 2</button>
        <h4>방법3:함수 미 정의,요소의 onClick={/*(e)=>함수 구현부*/}</h4>
        <button className="btn btn-warning" onClick={e=>{console.log('버튼 클릭 3');console.log(e.target)}}>클릭이벤트 2</button>
   
    </>
}


export default Hello;