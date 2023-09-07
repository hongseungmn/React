
/*
Context객체 생성 : React.createContext(컨텍스트의 기본값)
-여러 컴포넌트를 하나의 문맥으로 묶는 객체다.
-같은 영역으로 묶는 최상위 컴포넌트에 <Context객체.Provider value={데이타}>
 로 하위 컴포넌트들을 감싼다
 그러면 하위 컴포넌트들에서는 value속성에 지정한 데이타를
 속성 드릴링을 하지 않고 가져다 쓸수 있다
 -하위 컴포넌트에서 가져다 쓸때는 useContext(Context객체) 호출
 컨텍스트의 기본값은 <Context객체.Provider value={설정값}>로 감싸지 않을때 
 하위 컴포넌트에서 const 값=useContext(Context객체)로 사용시 
 useContext가 반환한 값은 컨텍스트의 기본값이 된다. 보통은 null을 설정한다
*/

import React from "react";

//Context객체 생성
export const UsersContext = React.createContext(null);