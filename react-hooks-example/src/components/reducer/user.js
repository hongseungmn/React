export default function User({user,dispatch}){
   
    return <>
    <li className="list-group-item">
      <kbd>이 름</kbd> {user.username}
      <kbd className="ml-3">나 이</kbd> {user.age}
      <button className="btn btn-danger ml-3" onClick={
        ()=>dispatch({type:'DELETE',id:user.id})

      }>회원탈퇴</button>
    </li>
  </>
}