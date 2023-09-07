import { useContext } from "react";
import { UsersContext } from "./usersContext";

const Header=()=>{
    console.log('Header렌더링:Header()함수 호출');   

    const {usersInfo}=useContext(UsersContext);
    return <>
        <kbd>총 회원 수 :{usersInfo.count} </kbd>
    </>
};

export default Header;