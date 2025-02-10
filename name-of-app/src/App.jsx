import CountButton from './countButton';
import LikeButton from './likeButton';
import List from './list';
import MyApp from './myApp';



function App() {
  //LikeButton 이 항상 대문자로 시작하는 것에 주의하자 이것이 React 컴포넌트라는 것을 알 수 있는 방법이다.
  //React 컴포넌트 이름은 항상 대문자로 시작해야 하고 HTML 태그는 소문자로 시작해야 한다

  //export default 키워드는 파일의 주요 구성 요소를 지정한다. -> 자세한 건 MDN에서 알아보자

  //JSX 주의사항
  //1. <br/> 과 같은 태그를 닫아야 한다
  //2. 컴포넌트는 여러 개의 JSX 태그를 반환할 수 없다. 
  return (
    // 꼭 div로 감쌀 필요는 없다 <></> 로 감싸면 부모가 없는 상태로 나타난다
    <div>  
      <h1>Welcome my app</h1>
      <LikeButton/>
      <LikeButton/>
      <LikeButton/>
      <List/>
      <A/>
      <h1>데이터 보여주기</h1>
      <Profile user={user}/>
      <Profile user={user1}/>
      <Profile user={user2}/>
      <h1>화면 업데이트 하기</h1>
      <CountButton />
      <h1>데이터 교환하기</h1>
      <MyApp/>
    </div>
  )
}

/***** JSX로 마크업 작성하기 *****/
function A() {
  return (
    <>
      <label htmlFor='input'>{10 + 20 + 'aaaaa'}</label>
      <input id='input'></input>
    </>
  );
}

/*****  데이터 보여주기 *****/

const user ={
  name : 'hong seongmin',
  imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}
function Profile({user}) {
  //여기서 style의 {{}}의 경우 아래의 변수가 해당 자리에 들어가는 것과 같다
  // const style = {
  //   width: user.imageSize,
  //   height: user.imageSize
  // }

  //조건부 렌더링 적용 1 : if - else 이용
  // if (user.name)
  //   return (
  //     <>
  //       <h1>{user.name}</h1>
  //       <img 
  //         className='avatar'
  //         src={user.imageUrl} 
  //         alt={'Photo of ' + user.name} 
  //         style={{
  //           width: user.imageSize,
  //           height: user.imageSize
  //         }}
  //       />
  //     </>
  //   ) 
  // else return null;

  //조건부 렌더링 적용 2 : 삼항 연산자 이용
  // return user.name ? (
  //   <>
  //     <h1>{user.name}</h1>
  //     <img 
  //       className='avatar'
  //       src={user.imageUrl} 
  //       alt={'Photo of ' + user.name} 
  //       style={{
  //         width: user.imageSize,
  //         height: user.imageSize
  //       }}
  //     />
  //   </>
  // ) : (
  //   <div>not found name</div>
  // )

  //조건부 렌더링 적용 3 : &&로 데이터가 없는 경우 표출 x
  //0은 falsy한 값이지만, && 연산자에서 그 자체로 반환됩니다. -주의, 따라서 삼항 연산자가 안전하다
  return (
    user.name && (
      <>
        <h3>{user.name}</h3>
        <img 
          className='avatar'
          src={user.imageUrl} 
          alt={'Photo of ' + user.name} 
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    )
  )
}


/***** 조건부 렌더링 *****/
const user1 ={
  name : 'User 1',
  imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

const user2 ={
  imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}


export default App;