//객체를 생성해서 컴포넌트에 삽입한다

const user = {
  name : 'Hong',
  imageUrl : 'https://cdn.kormedi.com/wp-content/uploads/2023/12/unnamed-file-235.jpg.webp',
  imageSize : 90,
};

/*

style={{}}는 JSX에서 사용되는 객체 리터럴 표기법입니다. 
JSX에서 스타일을 지정할 때 사용됩니다. 
JSX에서 중괄호 {} 안에 있는 것은 JavaScript 표현식으로 해석되므로, 
{} 안에 JavaScript 객체를 사용하여 스타일을 지정할 수 있습니다.

여기서 중요한 점은 style={{}}에서 외부 중괄호는 
JSX 문법에서 JavaScript 표현식을 허용하기 위한 것이고, 
내부 중괄호는 JavaScript 객체를 선언하는 것입니다. 
즉, 내부 중괄호 안에는 JavaScript 객체가 들어가게 됩니다.

*/

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className = 'avatar'
        src = {user.imageUrl}
        alt = {'Photo of ' + user.name}
        style = {{
          width : user.imageSize,
          height : user.imageSize
        }}
      />
    </>
  )
}


export default Profile;