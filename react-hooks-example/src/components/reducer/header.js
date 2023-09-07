//<Header total={데이타}/>
const Header=(props)=>{
    console.log('Header렌더링:Header()함수 호출');
    console.log('props:',props);//{키:값,...}형태의 객체,이때 키는 컴포넌트(JSX 태그)의 속성명
    return <>
        <kbd>총 회원 수 : {props.total}</kbd>
    </>
};

export default Header;