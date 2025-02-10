export default function MyButton({count, handleCount}) {
  return (
    <button onClick={handleCount}>Clicked {count} times</button>
  )
}