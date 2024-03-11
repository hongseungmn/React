export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamrr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
      <ul style={{
        backgroundColor : 'black',
        color : 'pink'
      }}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  )
}