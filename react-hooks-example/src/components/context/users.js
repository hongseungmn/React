import { useContext } from "react";
import User from "./user";
import { UsersContext } from "./usersContext";

export default function Users(){
    const {usersInfo} = useContext(UsersContext);
    return <>
        <ul className="list-group list-group-flush">
             {/*여기서는 각 유저별 정보를 usersInfo에서 꺼내온 User를 렌더링해야 하기때문에
                반드시 props로 넘기자*/}
            {usersInfo.users.map((user)=>{return <User user={user} key={user.id}/>})}
        </ul>
    </>
}