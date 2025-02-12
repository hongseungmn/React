function Profile(name) {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt={name} />
}

//default를 사용하면 App.jsx에서 import App from './Gallery'; 으로 불러올 수 있지만
//사용하지 않으면 import {Gallery} from './Gallery'; 으로 불러와 사용할 수 있다
export default function Gallery() {
  /* 아래 방법은 매우 느리고 버그를 유발한다
    - Gallery가 재정의 되면 Profile또한 재정의 되므로 
    - 위 방법처럼 레벨을 상위로 올리면 Profile은 재사용할 수 있기 때문
    - 또한 확장에 용이
  */

  const name = "Katherine Johnson";

  // function Profile() {
  //   return <img src="https://i.imgur.com/MK3eW3As.jpg" alt='Katherine Johnson' />
  // }
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile name={name}/>
      <Profile name={name + '+++!!!'}/>
      <Profile name={name + '!!!'}/>
    </section>
  );
}