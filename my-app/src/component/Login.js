

function Login(id, pw) {
  // let content;
  // if(isLoggedIn) {
  //   content = <AdminPanel/>;
  // } else {
  //   content = <LoginForm/>;
  // }

  // return (
  //   <div>
  //     {content}
  //   </div>
  // )
  //위 코드를 간단하게 아래와 같이 할 수 있다
  return (
    <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
    </div>
  )
}