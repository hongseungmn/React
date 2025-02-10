/***** 목록 렌더링  *****/

//<li>에 key 속성이 존재하는 것을 주목하자. 
// 목록의 각 항목에 대해, 형제 항목 중에서 해당 항목을 고유하게 식별하는 문자열 또는 수자를 전달해야 한다
// React는 나중에 항목을 삽입, 삭제 또는 재정렬할 때 어떤 일이 일어났는지 이해하기 위해 키를 사용한다
const products = [
  {title: 'Cabbage', id: 1},
  {title: 'Garlic', id: 2},
  {title: 'Apple', id: 3},
]


function List() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.title}
        </li>
      ))}
    </ul>
  )
}

export default List;