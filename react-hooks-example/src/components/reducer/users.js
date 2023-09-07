import User from "./user";

export default function Users({users,dispatch}){
    console.log('Users()렌더링');
    console.log('Users의 users:',users);
    return <>
        <ul className="list-group list-group-flush">
            {users.map((user)=>{return <User key={user.id} dispatch={dispatch} user={user}/>})}   
        </ul>
    </>
}