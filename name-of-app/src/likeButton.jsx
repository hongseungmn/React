import React, { useState } from "react";

/***** 이벤트에 응답하기 *****/
function LikeButton() {
  
  const [liked, setLiked] = useState(false);
  if(liked) return 'you liked this';

  function handleClick() {
    setLiked(true);
    alert('You Clicked Me !');
  }

  //문서에 나와있는 방법으로
  // return React.createElement('button', {
  //   onClick: () => setLiked(true),
  // });

  //jsx를 사용
  return (
    <button onClick={handleClick}>클릭 !</button>
  );
}



export default LikeButton;